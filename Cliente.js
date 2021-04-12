export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this.cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
