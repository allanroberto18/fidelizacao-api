import EstabelecimentoModel from "./estabelecimento.model";
import {CombustivelModel} from "./combustivel.model";

interface EstabelecimentoCombustivelModel {
    estabelecimento: EstabelecimentoModel,
    combustivel: CombustivelModel
}

export default EstabelecimentoCombustivelModel;