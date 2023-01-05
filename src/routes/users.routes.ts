import { Router } from "express";
import { validarionMiddlleware } from '../middlewares/validation'
import { createUser, listUser, LogUser } from '../controllers/user'

import { userValidations } from '../validations/user'


const userRoutes = Router()

userRoutes.get ('/', listUser)
//userRoutes.get ('/:id', )
userRoutes.post ('/', userValidations, validarionMiddlleware, createUser)
userRoutes.post ('/login', userValidations, validarionMiddlleware, LogUser)
// userRoutes.put ('/:id', updadeUser)
// userRoutes.delete('/:id', deleteUser)

export default userRoutes