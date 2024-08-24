import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

type Payload = {
    sub: string
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization

    if(!authToken){
        res.status(401).send({
            error: {
                detail:{
                    message: "Não autenticado"
                }
            }
        })
    }

    const [, token] = authToken.split(' ')


    try {
        const {sub} = verify(
            token,
            process.env.JWT_KEY,
        ) as Payload

        req.user_id = sub
        return next()
    } catch (e) {
        res.status(401).send({
            error: {
                detail: {
                    message: "Não Autenticado"
                }
            }
        })
    }
}