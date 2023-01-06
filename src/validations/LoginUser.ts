// valida se os dados recebidos sao validos, comparando dados

import { body, param} from 'express-validator'

export const loginuserValidations = [
    body('email').notEmpty().withMessage('E-mail é obrigatorio'),
    body('password').notEmpty().withMessage('Não da pra cadastrar sem senha né')
]

export const LoginUserIdValidation = [
    param('id').notEmpty().withMessage('Id é obrigatorio!!')
]
export const iditUserValidarions = [...LoginUserIdValidation, ...loginuserValidations]