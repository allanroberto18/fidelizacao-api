import { Router, Request, Response } from 'express';
import User from '../model/user.model';

class UserController {
    
    public path = "/api/users";
    public router = Router();

    private users: User[] = [
        {
            id: "some_id",
            idBandeira: 1,
            nome: "allan roberto",
            email: "allanroberto18@gmail.com",
            telefone: "+49 (0162) 407-8181",
            senha: "Alr280104!"
        }
    ]

    public constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAllUsers);
    }

    getAllUsers = (request: Request, response: Response) => {
        response.send(this.users);
    }
}

export default UserController;