import { Request, Response } from "express";
import getByUserCase from "../../aplication/GetByUserCase";

export default class getByIdController{
    constructor(readonly useCase: getByUserCase) { }

    async run (req: Request, res: Response){

        const result = await this.useCase.run(req.params.id)
        if (result === null){
            return res.status(404).json({
                msg: "User not found"
            });
        }
        return res.status(200).json({
            msg: "User found",
            data: result
        })

    }
}