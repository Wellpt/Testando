import { Router } from "express";
import { validarionMiddlleware } from '../middlewares/validation'
import { createUser } from '../controllers/user'

import { userValidations } from '../validations/user'


const userRoutes = Router()

// userRoutes.get ('/', listUser)
// userRoutes.get ('/:id', getUser)
userRoutes.post ('/', userValidations, validarionMiddlleware, createUser)
// userRoutes.put ('/:id', updadeUser)
// userRoutes.delete('/:id', deleteUser)

export default userRoutes