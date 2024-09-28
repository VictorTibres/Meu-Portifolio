class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = (idade);
        this.cargo = cargo;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}`)
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    
    gerenciar(){
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);

    }
}
class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }
    
    programar(){
        console.log(`${this.nome} está programando em ${this.linguagem}.`)
    }
}

const gerente1 = new Gerente('Carlos', 25, 'Gerente', 'Financeiro');
gerente1.seApresentar();
gerente1.gerenciar();

const desenvolvedor1 = new Desenvolvedor('Igor', 40, 'Desenvolvedor', 'JavaScript')
desenvolvedor1.seApresentar();
desenvolvedor1.programar();