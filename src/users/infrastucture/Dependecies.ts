import CreateUserCase from "../aplication/CreateUserCase";
import getByUserCase from "../aplication/GetByUserCase";
import MysqlUserRepository from "./MysqlUserRepository";
import CreateUserController from "./controllers/CreateController";
import getByIdController from "./controllers/GetByCredentials";



export const mysqlRepository = new MysqlUserRepository();

export const createUserCase = new CreateUserCase(mysqlRepository);

export const getByIdUser = new getByUserCase (mysqlRepository);

export const createUserController = new CreateUserController (createUserCase);

export const ByIdUserController = new getByIdController (getByIdUser);
