import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private nogociacoes = new Negociacoes;

    constructor(){
        this.inputData= document.querySelector('#data')  as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade')  as HTMLInputElement;
        this.inputValor = document.querySelector('#valor')  as HTMLInputElement;
    }
    adicionar(): void{
        const negociacao = this.criaNegociacao();
        this.nogociacoes.acidiona(negociacao);
        console.log(this.nogociacoes.lista());
        const limpandoFormulario = this.limpandoFormulario();

        }
    
    criaNegociacao(): Negociacao{
        const exp =/-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao( date, quantidade, valor);
    }
    limpandoFormulario(): void{
        this.inputData.value= '';
        this.inputQuantidade.value = '';
        this.inputValor.value='';
        this.inputData.focus();
    }
    
}