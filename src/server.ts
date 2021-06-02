import App from './app';
import DIContainer from "./config/container";
import IController from "./controller/controller";
import UserController from "./controller/user.controller";
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.APP_PORT;

const userController = DIContainer.resolve<IController>(UserController);
const app = new App([
    userController
], +PORT);

app.listen();
