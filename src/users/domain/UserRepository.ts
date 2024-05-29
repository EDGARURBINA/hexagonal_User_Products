import { UserCreateRequest } from "./datos/UserRequest";
import userEntry from "./UserEntry";

export default interface UserRepository{
    create (user: UserCreateRequest) : Promise <userEntry | null>
    getById (id: string ) : Promise <userEntry | null>
    
    
}