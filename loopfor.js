var a = [10,20,30,40,50,60,];


a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
    tot+= valor;
})

console.log(tot);

var valoresFiltrados = a.filter(valor => valor > 10);

console.log(valoresFiltrados);

//

var carro = [{ modelo: 'Audi A3', marca : 'Audi', ano : 2020},
             { modelo: 'Compass', marca : 'Jeep', ano :2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica].marca)
}

for (let c of carro){
     console.log(c.ano)

}


var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}


var t = 1;

do{
    console.log(t)
    t++
}while( t < 1)




///
function calcularSoma(array) {
    // Passo 1: Inicializar a variável 'sum'
    let sum = 0;
    
    // Passo 2: Inicializar o índice
    let index = 0;
    
    // Passo 3: Usar 'do-while' para iterar sobre os elementos do array
    do {
        // Usar o método 'reduce' para somar os elementos do array até o índice atual
        sum = array.slice(0, index + 1).reduce((acc, val) => acc + val, 0);
        
        // Incrementar o índice
        index++;
    } while (index <= array.length); // Condição para continuar o loop
    
    // Exibir o resultado
    console.log("A soma dos números é:", sum);
}

// Exemplo de uso
const numeros = [1, 2, 3, 4, 5];
calcularSoma(numeros);

//

const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {

    soma += numeros[i];

  }

}

console.log(soma);
