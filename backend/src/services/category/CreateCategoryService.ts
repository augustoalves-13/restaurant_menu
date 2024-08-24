import prismaClient from "../../prisma";

class CreateCategoryService {
    async execute(name: string){

        if(!name)
            throw new Error('Informe o nome da categoria')

        const category = await prismaClient.category.create({
            data:{ name: name }
        })

        return category
    }
}

export { CreateCategoryService }