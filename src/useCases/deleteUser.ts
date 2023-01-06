import { PrismaClient } from "@prisma/client";
import { NotFoundException } from "../domain/exceptions/NotFound";

const prisma= new PrismaClient()

export class DeleteUsersUseCase {
    constructor () {}

    async handle(id: string) {
        // verificar se o email existe
        const emailExiste = await this.verificaEmailExiste (id)

        if (!emailExiste) {
            throw new NotFoundException ("Usuário não encontrado")
        }

        await prisma.user.delete({
            where: {
                id: id
            }
        })
    }
    // função que verifica se o usuario existe
    async verificaEmailExiste (id: string) : Promise<boolean>{
        const user = await prisma.user.findFirst ({
            where: {
                id: {
                    equals: id
                }
            }
        })
        return user !== null
    }}

