// valida se os dados recebidos sao validos, comparando dados

import { body, param} from 'express-validator'

export const userValidations = [
    body('name').notEmpty().withMessage('Nome é obrigadorio'),
    body('email').notEmpty().withMessage('E-mail é obrigatorio'),
    body('password').notEmpty().withMessage('Não da pra logar sem senha né')
]

export const userIdValidation = [
    param('id').notEmpty().withMessage('Id é obrigatorio!!')
]
export const iditUserValidarions = [...userIdValidation, ...userValidations]