import query from "../../Database/Conection"
import { UserRequest, UserCreateRequest } from "../domain/datos/UserRequest"
import userEntry from "../domain/UserEntry"
import UserRepository from "../domain/UserRepository"

export default class MysqlUserRepository implements UserRepository{
  constructor() {}

  async create(user: UserCreateRequest): Promise<userEntry | null>{

    const sentence =
            "INSERT INTO Users (nombre, username, email, password, edad, ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
             
            const params: (string | number | null)[] = [
            user.nombre,
            user.edad,
            user.email,
            user.password,
            user.username
          ];

          try {
            const [result]: any = await query(sentence, params);
            if (!result || result.length === 0) {
                console.log("Nose pudo completar con el resgistro de usuario");
                return null
            }


            const response : userEntry = {
              id: result.insertId.toString(),
              nombre: user.nombre,
              username: user.username,
              email: user.email,
              edad: user.edad,
              password: user.password

            }

            return response;

          } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return null;
        }

  }
  async getById(id: string): Promise<userEntry | null> {
    const setence: string = "SELECT * FROM Users WHERE id = ?";
    const params = [id];

    try {
        const [entry]: any = await query(setence, params);

        if (entry === null || entry.length === 0) {
            return null
        }

        return entry[0];

    } catch (error) {
        console.log("Ha ocurrido un erro en la petición.");
        console.error(error);
        return null;
    }

}

}
