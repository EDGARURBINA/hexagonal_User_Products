import { UserCreateRequest } from "../domain/datos/UserRequest";
import UserRepository from "../domain/UserRepository";

export default class CreateUserCase {
    constructor (readonly entryRepository: UserRepository) {}

    async run (user: UserCreateRequest){
        const addUser = await this.entryRepository.create(user);


        if (!addUser){
            return null;
        }
        return addUser;
    }
} 