import { NextFunction, Request, Response } from "express";

const asyncErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error)
        return res.status(400).send({
            error: {
                detail:{
                    message: err.message
                }
            }
       })

    return res.status(500).send({
        status: 'error',
        message: 'Internal server error'
    })   
}

export default asyncErrors