import {Request, Response, Router} from 'express';
import {inject, injectable} from 'inversify';
import "reflect-metadata";
import TYPES from '../config/types';
import IController from "./controller";
import {IUserRepository} from "../repository/repository";

@injectable()
class UserController implements IController {

    public path = "/api/users";
    public router = Router();
    private _userRepository: IUserRepository;

    public constructor(
        @inject(TYPES.IUserRepository) _userRepository: IUserRepository
    ) {
        this._userRepository = _userRepository;
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAllUsers);
        this.router.post(this.path, this.authenticateUserByEmailAndPassword);
        this.router.get(`${this.path}/:id`, this.getUserById);
    }

    getAllUsers = (request: Request, response: Response) => {
        response.send(
            this._userRepository.findAll()
        );
    }

    getUserById = (request: Request, response: Response) => {
        const id = request.params.id;
        const user = this._userRepository.findById(id);

        try {
            response
                .status(200)
                .send(user)
            ;
        } catch (error) {
            response
                .status(404)
                .send(error.message)
            ;
        }
    }

    authenticateUserByEmailAndPassword = (request: Request, response: Response) => {
        const email = request.body.email;
        const password = request.body.password;
        const user = this._userRepository.findByEmailAndPassword(email, password);

        try {
            response
                .status(200)
                .send(user)
            ;
        } catch (error) {
            response
                .status(404)
                .send(error.message)
            ;
        }
    }
}

export default UserController;
