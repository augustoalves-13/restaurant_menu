import { Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    async handle(_, res: Response){
        
        const listCategoryService = new ListCategoryService()
        const categories = await listCategoryService.execute()

        return res.send(categories)
    }
}

export { ListCategoryController }