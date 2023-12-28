import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];


    acidiona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];

    }
}