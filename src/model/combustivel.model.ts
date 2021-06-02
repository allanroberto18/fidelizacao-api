enum TipoCombustivel {
     Gasolina = "Gasolina Commun",
     Aditivada = "Gasolina Aditivada",
     Alcool = "Alcool",
     Diesel = "Diesel"
}

interface CombustivelModel {
     idProduto: string,
     ordem: number,
     tipoCombustivel: TipoCombustivel,
     nomeProduto: string,
     precoBomba: number,
     precoComDesconto: number,
     valorDesconto: number,
     percentualDesconto: number
}

export { CombustivelModel, TipoCombustivel };