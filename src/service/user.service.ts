import UserResponse from "../response/user.response";
import {IUserRepository} from "../interfaces/repository";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IMapper from "../interfaces/mapper";
import UserModel from "../model/user.model";
import {IUserService} from "../interfaces/service";

@injectable()
class UserService implements IUserService {

    private repository: IUserRepository;
    private mapper: IMapper<UserModel, UserResponse>

    public constructor(
        @inject(TYPES.IUserRepository) userRepository: IUserRepository,
        @inject(TYPES.ICombustivelMapper) userMapper: IMapper<UserModel, UserResponse>
    ) {
        this.repository = userRepository;
        this.mapper = userMapper;
    }

    getAll(): UserResponse[] {
        return this.repository
            .findAll()
            .map(this.mapper.mapResponseFromModel);
    }

    getUserByEmailAndPassword(email: string, password: string): UserResponse {
        const model = this.repository.findByEmailAndPassword(email, password);
        return this.mapper.mapResponseFromModel(model);
    }

    getById(id: string): UserResponse {
        const model = this.repository.findById(id);
        return this.mapper.mapResponseFromModel(model);
    }
}

export default UserService;