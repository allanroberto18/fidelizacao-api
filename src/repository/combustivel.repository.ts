import {IRepository} from "../interfaces/repository";
import {inject, injectable} from "inversify";
import TYPES from "../config/types";
import IFactory from "../interfaces/factory";
import {CombustivelModel} from "../model/combustivel.model";

@injectable()
class CombustivelRepository implements IRepository<CombustivelModel> {

    private factory: IFactory<CombustivelModel>;

    public constructor(
        @inject(TYPES.ICombustivelFactory) factory: IFactory<CombustivelModel>
    ) {
        this.factory = factory;
    }

    findAll(): CombustivelModel[] {
        return this.factory.generate();
    }

    findById(id: string): CombustivelModel {
        const itemsFiltered = this.findAll()
            .filter(item => item.idProduto === id);

        if (itemsFiltered.length === 0) {
            return null;
        }

        return itemsFiltered[0];
    }
}

export default CombustivelRepository;
