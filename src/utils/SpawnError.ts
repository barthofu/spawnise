import BufferList from "bl/BufferList"

export class SpawnError extends Error {

    public code?: number | null
    public stderr?: string | BufferList
    public stdout?: string | BufferList

    constructor(message: string) {
        super(message)
    }
}