export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    acidiona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
