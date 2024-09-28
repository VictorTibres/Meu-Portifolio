class Contacliente {
    constructor(numeroConta, saldo, debito, credito) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.credito = credito;
        this.debito = debito;
    }

    calcularSaldoAtual() {
        return this.saldo - this.debito + this.credito;
    }

    verificarSaldo() {
        const saldoAtual = this.calcularSaldoAtual();
        if (saldoAtual >= 0) {
            alert("Saldo positivo R$" + saldoAtual.toFixed(2));
        } else {
            alert("Saldo negativo R$" + saldoAtual.toFixed(2));
        }
    }
}

// Criando a instância da classe após a definição da classe
let numeroConta = prompt("Digite o número da conta do cliente");
let saldo = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o débito do cliente"));
let credito = parseFloat(prompt("Digite o crédito do cliente"));

let conta = new Contacliente(numeroConta, saldo, debito, credito);
conta.verificarSaldo();