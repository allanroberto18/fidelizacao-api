import {IUserRepository} from "./repository";
import UserModel from "../model/user.model";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IFactory from "../factory/factory";
import UserException from "../exception/user.exception";

@injectable()
class UserRepository implements IUserRepository {

    private _userFactory: IFactory;

    public constructor(
        @inject(TYPES.IFactory) private userFactory: IFactory
    ) {
        this._userFactory = userFactory;
    }

    findAll(): UserModel[] {
        return this._userFactory.generate();
    }

    findByEmailAndPassword(email: string, password: string): UserModel {
        const usersFiltered = this.findAll()
            .filter(user => user.email === email && user.senha === password);

        if (usersFiltered.length === 0) {
            throw new UserException(`Invalid user or password`);
        }

        return usersFiltered[0];
    }

    findById(id: string): UserModel {
        const usersFiltered = this.findAll().filter(user => user.id === id);

        if (usersFiltered.length === 0) {
            throw new UserException(`User with id ${id} not found`);
        }

        return usersFiltered[0];
    }
}

export default UserRepository;
