import prismaClient from "../../prisma"
import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

type Auth = {
    email: string
    password: string
}

class AuthUserService {
    async execute({email, password}: Auth){
        const user = await prismaClient.user.findFirst({    
            where: {
                email: email
            }
        })

        
        if(!user)
            throw new Error('E-mail ou senha incorretos')

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch)
            throw new Error('E-mail ou senha incorretos')
        
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_KEY,
            {
                subject: user.id,
                expiresIn: '7d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }