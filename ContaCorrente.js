export class ContaCorrente{
    agencia;
    cliente;
    // #saldo (private) = https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
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