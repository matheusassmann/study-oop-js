import {Cliente} from "./Cliente.js"

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    // #saldo (private) = https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        else{
            console.log('Saldo Indisponível"');
        }
        
    }
    depositar(valor){
        valor > 0 ? this._saldo += valor : console.log('Valor Inválido!');
    }
    transferir(valor, destino){
        this.sacar(valor);
        destino.depositar(valor);
    }
}