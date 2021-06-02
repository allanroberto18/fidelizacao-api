import {Container} from "inversify";
import IFactory from "./factory/factory";
import TYPES from "./config/types";
import UserFactory from "./factory/user.factory";
import IController from "./controller/controller";
import UserController from "./controller/user.controller";
import {IUserRepository} from "./repository/repository";
import UserRepository from "./repository/user.repository";

const DIContainer = new Container();
DIContainer.bind<IFactory>(TYPES.IFactory).to(UserFactory);
DIContainer.bind<IController>(TYPES.IController).to(UserController);
DIContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

export default DIContainer;
