import App from './app';
import DIContainer from "./config/container";
import IController from "./interfaces/controller";
import UserController from "./controller/user.controller";
import * as dotenv from 'dotenv';
import CombustivelController from "./controller/combustivel.controller";

dotenv.config();
const PORT = process.env.APP_PORT;

const userController = DIContainer.resolve<UserController>(UserController);
const combustivelController = DIContainer.resolve<CombustivelController>(CombustivelController);
const app = new App([
    userController,
    combustivelController
], +PORT);

app.listen();
