import { PrismaClient, User } from "@prisma/client";
import { NotFoundException } from "../domain/exceptions/NotFound"

const prisma = new PrismaClient() 

export class LogUsersUseCase {
    constructor () {}

    async handle(email: string): Promise<User | null> {
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email
                }
            }
        })
        if (!user) {
            throw new NotFoundException ('Usuario não encontrado')
        }
        return user
    }
}