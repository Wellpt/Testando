import { Request, Response } from "express";

import { UserDto } from "../domain/dtos/user";
import { CreateUserUseCase } from "../useCases/createUser";

//Criar usuario
export async function createUser(req:Request<{},{}>, res: Response) {
    const user = req.body
    const useCase = new CreateUserUseCase()
    const createUser = await useCase.handle(user)
    return res.json (createUser)
}