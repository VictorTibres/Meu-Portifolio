function numeros5(n1, n2, n3 ,n4, n5){
    let ray = [n1,n2,n3,n4,n5];

    return ray.filter( number => number < 0);
}

console.log(numeros5(-5,-2, 4,-3, 6));


//Array de numeros 

const numeros = [5,10,15,20,25];

//Verificar se pelo menos um número do array não é par ou menor que 0

let algumNãoParOuMenorQueZero = false;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 !== 0 || numeros[i] < 0) {

    algumNãoParOuMenorQueZero = true

    break;
 }

}

//Verificar se todos os números do array são divisíveis por 3 e 5

let todosDivisiveisPor3E5 = true

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0) {

        todosDivisiveisPor3E5 = false

        break;
     }
    }

console.log("Pelo menos um número não é par ou menor que zero?",
    algumNãoParOuMenorQueZero);


console.log("Todos os números são divisíveis por 3 e 5?",
    todosDivisiveisPor3E5);

let todosDivisiveisPor5 = true

for (let i = 0; i < numeros.length; i++) {
 if (numeros[i] % 5 !== 0) {

    todosDivisiveisPor5 = false

    break;

 }
}

console.log("Todos o números são divísiveis por 5?",
todosDivisiveisPor5);


