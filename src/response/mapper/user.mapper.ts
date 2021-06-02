import IMapper from "./mapper";
import UserModel from "../../model/user.model";
import UserResponse from "../user.response";
import {injectable} from "inversify";

@injectable()
class UserMapper implements IMapper<UserModel, UserResponse> {
    mapResponseFromModel(model: UserModel): UserResponse {
        return {
            id: model.id,
            nome: model.nome,
            email: model.email,
            telefone: model.telefone
        };
    }
}

export default UserMapper;