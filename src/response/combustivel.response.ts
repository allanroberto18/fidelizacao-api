import {TipoCombustivel} from "../model/combustivel.model";

interface CombustivelResponse {
    IdProduto: string,
    Ordem: number,
    TipoCombustivel: TipoCombustivel,
    NomeProduto: string,
    PrecoBomba: number,
    PrecoComDesconto: number,
    ValorDesconto: number,
    PercentualDesconto: number
}

export default CombustivelResponse;