import {CombustivelModel} from "./combustivel.model";

interface EstabelecimentoModel {
    id: number,
    idBandeira: number,
    nomeCv: string,
    endereco: string,
    bairro: string,
    cidade: string,
    uf: string,
    cep: string,
    telefone: string,
    contatoSuporte: string,
    email: string,
    quantidadeBico: number,
    geolocalizacao: string,
    nomeBandeiraCv: string,
    combustiveis: CombustivelModel[]
}

export default EstabelecimentoModel;