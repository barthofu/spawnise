import { ChildProcess } from "child_process"

export class SpawnPromise<T> extends Promise<T> {

    public child?: ChildProcess

    constructor(executor: (resolve: (value: T) => void, reject: (reason?: any) => void) => void) {
        super(executor)
    }
}