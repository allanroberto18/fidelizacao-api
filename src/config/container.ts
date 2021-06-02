import {Container} from "inversify";
import IFactory from "../factory/factory";
import TYPES from "./types";
import UserFactory from "../factory/user.factory";
import IController from "../controller/controller";
import UserController from "../controller/user.controller";
import {IUserRepository} from "../repository/repository";
import UserRepository from "../repository/user.repository";
import {IUserService} from "../service/service";
import UserService from "../service/user.service";
import IMapper from "../response/mapper/mapper";
import UserModel from "../model/user.model";
import UserResponse from "../response/user.response";
import UserMapper from "../response/mapper/user.mapper";

const DIContainer = new Container();
DIContainer.bind<IFactory<UserModel>>(TYPES.IFactory).to(UserFactory);
DIContainer.bind<IController>(TYPES.IController).to(UserController);
DIContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
DIContainer.bind<IUserService>(TYPES.IUserService).to(UserService);
DIContainer.bind<IMapper<UserModel, UserResponse>>(TYPES.IMapper).to(UserMapper)

export default DIContainer;
