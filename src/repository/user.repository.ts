import {IUserRepository} from "../interfaces/repository";
import UserModel from "../model/user.model";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IFactory from "../interfaces/factory";

@injectable()
class UserRepository implements IUserRepository {

    private _userFactory: IFactory<UserModel>;

    public constructor(
        @inject(TYPES.IUserFactory) private userFactory: IFactory<UserModel>
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
            return null;
        }

        return usersFiltered[0];
    }

    findById(id: string): UserModel {
        const itemsFiltered = this.findAll().filter(user => user.id === id);

        if (itemsFiltered.length === 0) {
            return null;
        }

        return itemsFiltered[0];
    }
}

export default UserRepository;
