import { indexException } from './indexException'

export class ExcetionNotAutorition implements indexException {
    statusCode: number = 401
    message: string
}