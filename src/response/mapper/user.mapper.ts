import IMapper from "../../interfaces/mapper";
import UserModel from "../../model/user.model";
import UserResponse from "../user.response";
import {injectable} from "inversify";

@injectable()
class UserMapper implements IMapper<UserModel, UserResponse> {
    mapResponseFromModel(model?: UserModel): UserResponse {
        if (model === null) {
            return null;
        }

        return {
            Id: model.id,
            Nome: model.nome,
            Email: model.email,
            Telefone: model.telefone
        };
    }
}

export default UserMapper;