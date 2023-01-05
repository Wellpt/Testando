import { PrismaClient, User } from "@prisma/client";
import { NotFoundException } from "../domain/exceptions/NotFound"

import { crypt } from "../service/crypto"

const prisma = new PrismaClient() 

export class LogUsersUseCase {
    constructor () {}

    async handle(email: string, password: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                },
                password: {
                    equals: password
                }
            }
        })
        if (!user) {
            throw new NotFoundException ('Dados Incorretos ou não encontrado')
        }
        return user
    }
}