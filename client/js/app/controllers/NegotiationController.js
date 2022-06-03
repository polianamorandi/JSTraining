class NegotiationController {
  constructor() {

    //bind mantém a associação do document com o querySelector
    let $ = document.querySelector.bind(document)
    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
  }
  create(event){
    event.preventDefault()

    let negotiation = new Negotiation(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    )

    console.log(negotiation)
  }
}