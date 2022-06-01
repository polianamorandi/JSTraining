class Negotiation {

  constructor(data, quantidade, valor) {
    this.data = data
    this.quantidade = quantidade
    this.valor = valor
    // this.volume = quantidade * valor
  }

  handleVolume(){
   return this.quantidade * this.valor
  }
}