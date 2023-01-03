import { indexException } from './indexException'

export class NotFoundException implements indexException {
    statusCode: number = 404
    message: string

    constructor (message: string) {
        this.message = message
    }
}