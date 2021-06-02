import {Container} from "inversify";
import IFactory from "../interfaces/factory";
import TYPES from "./types";
import UserFactory from "../factory/user.factory";
import IController from "../interfaces/controller";
import UserController from "../controller/user.controller";
import {IRepository, IUserRepository} from "../interfaces/repository";
import UserRepository from "../repository/user.repository";
import {IService, IUserService} from "../interfaces/service";
import UserService from "../service/user.service";
import IMapper from "../interfaces/mapper";
import UserModel from "../model/user.model";
import UserResponse from "../response/user.response";
import UserMapper from "../response/mapper/user.mapper";
import { CombustivelModel } from "../model/combustivel.model";
import CombustivelFactory from "../factory/combustivel.factory";
import CombustivelRepository from "../repository/combustivel.repository";
import CombustivelResponse from "../response/combustivel.response";
import CombustivelMapper from "../response/mapper/combustivel.mapper";
import CombustivelService from "../service/combustivel.service";
import CombustivelController from "../controller/combustivel.controller";

const DIContainer = new Container();
// controllers
DIContainer.bind<IController>(TYPES.UserController).to(UserController);
DIContainer.bind<IController>(TYPES.CombustivelController).to(CombustivelController);

// factories
DIContainer.bind<IFactory<UserModel>>(TYPES.IUserFactory).to(UserFactory);
DIContainer.bind<IFactory<CombustivelModel>>(TYPES.ICombustivelFactory).to(CombustivelFactory);

// Repositories
DIContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
DIContainer.bind<IRepository<CombustivelModel>>(TYPES.ICombustivelRepository).to(CombustivelRepository);

// Services
DIContainer.bind<IUserService>(TYPES.IUserService).to(UserService);
DIContainer.bind<IService<CombustivelResponse>>(TYPES.ICombustivelService).to(CombustivelService);

// mappers
DIContainer.bind<IMapper<UserModel, UserResponse>>(TYPES.IUserMapper).to(UserMapper)
DIContainer.bind<IMapper<CombustivelModel, CombustivelResponse>>(TYPES.ICombustivelMapper).to(CombustivelMapper)

export default DIContainer;
