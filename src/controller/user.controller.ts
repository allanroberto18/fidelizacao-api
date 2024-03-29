import {Request, Response, Router} from 'express';
import {inject, injectable} from 'inversify';
import "reflect-metadata";
import TYPES from '../config/types';
import IController from "../interfaces/controller";
import {IUserService} from "../interfaces/service";

@injectable()
class UserController implements IController {

    public path = "/api/users";
    public router = Router();
    private service: IUserService;

    public constructor(
        @inject(TYPES.IUserService) service: IUserService
    ) {
        this.service = service;
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAll);
        this.router.post(`${this.path}/auth`, this.authenticateUserByEmailAndPassword);
        this.router.get(`${this.path}/:id`, this.getById);
    }

    getAll = (request: Request, response: Response) => {
        response.send(
            this.service.getAll()
        );
    }

    getById = (request: Request, response: Response) => {
        const id = request.params.id;
        const dto = this.service.getById(id);

        if (dto === null) {
            response
                .status(404)
                .send('User not found')
            ;
        }

        response
            .status(200)
            .send(dto)
        ;
    }

    authenticateUserByEmailAndPassword = (request: Request, response: Response) => {
        const email = request.body.email;
        const password = request.body.password;
        const dto = this.service.getUserByEmailAndPassword(email, password);

        if (dto === null) {
            response
                .status(404)
                .send('User not found')
            ;
        }

        response
            .status(200)
            .send(dto)
        ;
    }
}

export default UserController;
