import { hash } from "bcryptjs"
import prismaClient from "../../prisma"

type User = {
    name: string
    email: string
    password: string
}

class CreateUserService {
    async execute({name, email, password}: User){
        
        if(!email)
            throw new Error('E-mail Inválido')

        
        const emailAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(emailAlreadyExists) 
            throw new Error('Já existe um usuário com este e-mail')


        const hashedPassword = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                email: email,
                name: name,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export {CreateUserService}