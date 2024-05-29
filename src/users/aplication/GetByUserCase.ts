import UserRepository from "../domain/UserRepository";
import UserResponse from "../domain/datos/UserResponse";

export default class getByUserCase {

    constructor (readonly repository: UserRepository) {}

    async run (id: string){
        const result = await this.repository.getById(id);

        if(result === null) return result;

        const response: UserResponse = {
            id: result.id,
            username: result.username,
            email: result.email,
            password: result.password,
            nombre: result.nombre,
            edad : result.edad
        }
        return response;


    }

}