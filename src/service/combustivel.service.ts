import {IRepository} from "../interfaces/repository";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IMapper from "../interfaces/mapper";
import {IService} from "../interfaces/service";
import CombustivelResponse from "../response/combustivel.response";
import {CombustivelModel} from "../model/combustivel.model";

@injectable()
class CombustivelService implements IService<CombustivelResponse> {

    private repository: IRepository<CombustivelModel>;
    private mapper: IMapper<CombustivelModel, CombustivelResponse>

    public constructor(
        @inject(TYPES.ICombustivelRepository) repository: IRepository<CombustivelModel>,
        @inject(TYPES.ICombustivelMapper) mapper: IMapper<CombustivelModel, CombustivelResponse>
    ) {
        this.repository = repository;
        this.mapper = mapper;
    }

    getAll(): CombustivelResponse[] {
        return this.repository
            .findAll()
            .map(this.mapper.mapResponseFromModel);
    }

    getById(id: string): CombustivelResponse {
        const model = this.repository.findById(id);
        return this.mapper.mapResponseFromModel(model);
    }
}

export default CombustivelService;