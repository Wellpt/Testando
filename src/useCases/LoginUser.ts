import { PrismaClient, User } from "@prisma/client";
import { NotFoundException } from "../domain/exceptions/NotFound"


const prisma = new PrismaClient() 

export class LogUsersUseCase {
    constructor () {}

    async handle(email: string, password: string): Promise<User | null> {
        const login = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                },
                password:  {
                    equals: password
                }
            }
        })
        if (!login) {
            throw new NotFoundException ('Dados Incorretos ou não encontrado')
        }
        return login
    }
}