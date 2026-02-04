import { Writable } from "node:stream";

class LogStream extends Writable {
    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
        const message = `[SYSTEM] ${chunk.toString()}, timestamp: ${new Date().toISOString().trim()}`
        console.log(message)
        callback()
    }
}

const log = new LogStream()
process.stdin.pipe(log)