import { Request, Response } from "express";

import { LogUsersUseCase } from "../useCases/LoginUser";
import { CreateUserUseCase } from "../useCases/createUser";
import { ListUsersUseCase } from "../useCases/listUser";
import { DeleteUsersUseCase } from "../useCases/deleteUser";

//Criar usuario
export async function createUser(req:Request<{},{}>, res: Response) {
    const user = req.body
    const useCase = new CreateUserUseCase()
    const createUser = await useCase.handle(user)
    return res.json (createUser)
}

//Listar usuarios 
export async function listUser(req:Request, res: Response) {
    const useCase = new ListUsersUseCase()
    const users = await useCase.handle()
    return res.json(users)
}

//loguin usuarios
export async function LogUser(req: Request<{},{}>, res: Response) {
    const { email } = req.body
    const { password } = req.body
    const useCase = new LogUsersUseCase()
    const loginUser = await useCase.handle(email, password)
    return res.json(loginUser)
}

//Deletar usuario 
export async function deleteUser(req: Request<{ id: string}>, res: Response) {
    const { id } = req.params
    const useCase = new DeleteUsersUseCase()
    await useCase.handle (id)

    return res.json({
        messege: "Usuário deletado com sucesso!"
    })
}