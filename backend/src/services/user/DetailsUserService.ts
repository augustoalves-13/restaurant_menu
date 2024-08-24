import prismaClient from "../../prisma"

class DetailsUserService {
    async execute(id:string){

        const user = await prismaClient.user.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        })
        
        if(!user)
            throw new Error('Nenhum dado encontrado')

        return user
    }
}

export {DetailsUserService}