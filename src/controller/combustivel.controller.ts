import {Request, Response, Router} from 'express';
import {inject, injectable} from 'inversify';
import "reflect-metadata";
import TYPES from '../config/types';
import IController from "../interfaces/controller";
import {IService, IUserService} from "../interfaces/service";
import CombustivelResponse from "../response/combustivel.response";

@injectable()
class CombustivelController implements IController {

    public path = "/api/combustiveis";
    public router = Router();
    private service: IService<CombustivelResponse>;

    public constructor(
        @inject(TYPES.ICombustivelService) service: IService<CombustivelResponse>
    ) {
        this.service = service;
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getAll);
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
}

export default CombustivelController;
