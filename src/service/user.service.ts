import {IUserService} from "./service";
import UserResponse from "../response/user.response";
import {IUserRepository} from "../repository/repository";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IMapper from "../response/mapper/mapper";
import UserModel from "../model/user.model";

@injectable()
class UserService implements IUserService {

    private _userRepository: IUserRepository;
    private _userMapper: IMapper<UserModel, UserResponse>

    public constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository,
        @inject(TYPES.IMapper) userMapper: IMapper<UserModel, UserResponse>
    ) {
        this._userRepository = userRepository;
        this._userMapper = userMapper;
    }

    getAll(): UserResponse[] {
        return this._userRepository
            .findAll()
            .map(this._userMapper.mapResponseFromModel);
    }

    getUserByEmailAndPassword(email: string, password: string): UserResponse {
        const userModel = this._userRepository.findByEmailAndPassword(email, password);
        return this._userMapper.mapResponseFromModel(userModel);
    }

    getUserById(id: string): UserResponse {
        const userModel = this._userRepository.findById(id);
        return this._userMapper.mapResponseFromModel(userModel);
    }
}

export default UserService;