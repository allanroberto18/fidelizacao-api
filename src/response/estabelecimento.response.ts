import CombustivelResponse from "./combustivel.response";

interface EstabelecimentoResponse {
     Id: string,
     IdBandeira: number,
     NomeCV: string,
     Endereco: string,
     Bairro: string,
     Cidade: string,
     UF: string,
     CEP: string,
     Telefone: string,
     ContatoSuporte: string,
     Email: string,
     QuantidadeBico: number,
     GeoLocalizacao: string,
     NomeBandeiraCV: string,
     Combustiveis: CombustivelResponse[],
}

export default EstabelecimentoResponse;