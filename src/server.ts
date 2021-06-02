import App from './app';
import DIContainer from "./container";
import IController from "./controller/controller";
import UserController from "./controller/user.controller";

const PORT = 5000;

const userController = DIContainer.resolve<IController>(UserController);
const app = new App([
    userController
], PORT);

app.listen();
