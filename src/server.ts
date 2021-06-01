import App from './app';
import UserController from './controller/user.controller';

const PORT = 5000;
const app = new App(
    [
        new UserController()
    ], PORT
);

app.listen();