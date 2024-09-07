import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { ProductTypes } from "../../types/productTypes";

class CreateProductController {
    async handle(req: Request, res: Response){
        const {category_id, name, price, description } = req.body

        let banner = ''

        const createProductService = new CreateProductService()
        const product = await createProductService.execute({
            name,
            price,
            description,
            banner,
            category_id,
        } as ProductTypes)

        return res.send(product)
    }
}

export {CreateProductController}