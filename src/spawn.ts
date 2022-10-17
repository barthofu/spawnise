import { SpawnOptions } from 'child_process'
import crossSpawn from 'cross-spawn'
import BufferList from "bl/BufferList"

import { SpawnError } from './utils/SpawnError'
import { SpawnPromise } from './utils/SpawnPromise'

export const spawn = (command: string, args: string[], options: SpawnOptions = {}) => {

    const child = crossSpawn(command, args, options)

    let stdout: BufferList | string
    let stderr: BufferList | string

    if (child.stdout) {

        stdout = new BufferList()

        child.stdout.on('data', data => {
            (stdout as BufferList).append(data)
        })

    } else stdout = ''

    if (child.stderr) {

        stderr = new BufferList()

        child.stderr.on('data', data => {
            (stderr as BufferList).append(data)
        })

    } else stderr = ''

    const promise = new SpawnPromise((resolve, reject) => {

        child.on('error', reject)

        child.on('close', code => {

            if (code === 0) resolve(stdout)
            else {
                
                const err = new SpawnError(`child exited with code ${code}`)
                err.code = code
                err.stderr = stderr
                err.stdout = stdout
                
                reject(err)
            }
        })
    })
    
    promise.child = child

    return promise
}
