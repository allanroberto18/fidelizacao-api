import UserModel from "../model/user.model";

interface IUserRepository {
    findAll(): UserModel[];
    findById(id: string): UserModel;
    findByEmailAndPassword(email: string, password: string): UserModel;
}

export { IUserRepository };
