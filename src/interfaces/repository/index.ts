import UserModel from "../../model/user.model";
import {CombustivelModel} from "../../model/combustivel.model";

interface IRepository<Model> {
    findAll(): Model[];
    findById(id: string): Model;
}

interface IUserRepository extends IRepository<UserModel>{
    findByEmailAndPassword(email: string, password: string): UserModel;
}

export { IRepository, IUserRepository };
