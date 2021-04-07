class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Alice';
cliente1.cpf = 33344455589;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Ricardo';
cliente2.cpf = 11122233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);