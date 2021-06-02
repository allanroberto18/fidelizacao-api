import {injectable} from "inversify";
import IFactory from "../interfaces/factory";
import {CombustivelModel, TipoCombustivel} from "../model/combustivel.model";

@injectable()
class CombustivelFactory implements IFactory<CombustivelModel> {
    private models: CombustivelModel[] = [
        {
            idProduto: "1",
            ordem: 1,
            tipoCombustivel: TipoCombustivel.Gasolina,
            nomeProduto: TipoCombustivel.Gasolina.toString(),
            precoBomba: 6.50,
            precoComDesconto: 5.85,
            valorDesconto: 0.685,
            percentualDesconto: 10.0
        },
        {
            idProduto: "2",
            ordem: 2,
            tipoCombustivel: TipoCombustivel.Aditivada,
            nomeProduto: TipoCombustivel.Aditivada.toString(),
            precoBomba: 6.85,
            precoComDesconto: 6.16,
            valorDesconto: 0.68,
            percentualDesconto: 10.0
        },
        {
            idProduto: "3",
            ordem: 3,
            tipoCombustivel: TipoCombustivel.Alcool,
            nomeProduto: TipoCombustivel.Alcool.toString(),
            precoBomba: 3.50,
            precoComDesconto: 3.15,
            valorDesconto: 0.35,
            percentualDesconto: 10.0
        },
        {
            idProduto: "4",
            ordem: 4,
            tipoCombustivel: TipoCombustivel.Diesel,
            nomeProduto: TipoCombustivel.Diesel.toString(),
            precoBomba: 4.50,
            precoComDesconto: 4.05,
            valorDesconto: 0.45,
            percentualDesconto: 10.0
        }
    ];

    generate(): CombustivelModel[] {
        return this.models;
    }
}

export default CombustivelFactory;

