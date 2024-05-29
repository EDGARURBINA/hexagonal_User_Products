import { Request, Response } from "express";
import CreateUserCase from "../../aplication/CreateUserCase";
import { UserCreateRequest } from "../../domain/datos/UserRequest";

export default class CreateUserController{
    constructor (readonly createUserCase :CreateUserCase){}

    async run (req: Request, res: Response){
        const {username,email, password,nombre, edad} = req.body;

        const user: UserCreateRequest = {
            username,
            email,
            password,
            nombre,
            edad
        };

        const result = await this.createUserCase.run(user);
        
        if (!result){
            return res.status(500).json({
                data: result,
                msg: "error al crear un usuario"
            });
        }

        return res.status(201).json({
            data: result,
            msg: "Usuario creado con éxito"
        })

        
    }
}