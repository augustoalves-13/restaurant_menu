import prismaClient from "../../prisma";
import type { ProductTypes } from "../../types/productTypes";

class CreateProductService {
    async execute({category_id, name, price, description, banner}: ProductTypes){

        if(!name || !price)
            throw new Error('Preencha todos os campos obrigatórios')        
        
        const product = await prismaClient.product.create({
            data: {
                category_id: category_id,
                name: name,
                price: price,
                description: description,
                banner: banner
            }
        })

        return product
    }
}

export {CreateProductService}