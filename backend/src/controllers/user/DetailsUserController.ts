import { Request, Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController {
    async handle(req: Request, res: Response){
        const userId = req.user_id

        const detailsUserService = new DetailsUserService()

        const user = await detailsUserService.execute(userId)

        return res.send(user)
    }
}

export {DetailsUserController}