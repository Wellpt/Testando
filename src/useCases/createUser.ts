import { v4 } from 'uuid'
import { PrismaClient, User } from '@prisma/client'

import { crypt } from '../service/crypto'
import { UserDto } from '../domain/dtos/user'

const prisma = new PrismaClient()

// Criar usuario no BD
export class CreateUserUseCase {
    constructor() {}

    async handle(user: Omit<UserDto, 'id'>): Promise <User> {
        const hashed = crypt(user.password)
        const createUser = await prisma.user.create({
            data: {
                id: v4(),
                name: user.name,
                email: user.email,
                password: hashed.hash,
                salt: hashed.salt
            }
        })
        return createUser
    }
}