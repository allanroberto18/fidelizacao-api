import IMapper from "../../interfaces/mapper";
import { CombustivelModel } from "../../model/Combustivel.model";
import {injectable} from "inversify";
import CombustivelResponse from "../combustivel.response";

@injectable()
class CombustivelMapper implements IMapper<CombustivelModel, CombustivelResponse> {
    mapResponseFromModel(model?: CombustivelModel): CombustivelResponse {
        if (model === null) {
            return null;
        }

        return {
            IdProduto: model.idProduto,
            Ordem: model.ordem,
            TipoCombustivel: model.tipoCombustivel,
            NomeProduto: model.nomeProduto,
            PrecoBomba: model.precoBomba,
            PrecoComDesconto: model.precoComDesconto,
            ValorDesconto: model.valorDesconto,
            PercentualDesconto: model.percentualDesconto
        };
    }
}

export default CombustivelMapper;