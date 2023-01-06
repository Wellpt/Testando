import { Router } from "express";
import { validarionMiddlleware } from '../middlewares/validation'
import { createUser, deleteUser, listUser, LogUser } from '../controllers/user'

import { userValidations } from '../validations/user'
import { loginuserValidations } from "../validations/LoginUser";


const userRoutes = Router()

userRoutes.get ('/', listUser)
//userRoutes.get ('/:id', )
// userRoutes.put ('/:id', updadeUser)
userRoutes.post ('/', userValidations, validarionMiddlleware, createUser)
userRoutes.post ('/login', loginuserValidations, validarionMiddlleware, LogUser)
userRoutes.delete('/:id', deleteUser)

export default userRoutes