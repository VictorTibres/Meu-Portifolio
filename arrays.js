var valores = [8,1,7,2,9];

console.log(valores[2]);

console.log("Array invertido: " + valores.reverse());


console.log(+ valores.sort());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao:  " + pos + " Valor: " + valores [pos]);
}

// Carros

var carros = ["volvo","fiat","bmw","volkswagen"]

console.log(carros[3]);


var carros = []

carros[0] = "volvo"
carros[1] = "fiat"
carros[2] = "bmw"
carros[3] = "volkswagen"

for (var pos = 0 ; pos < carros.length; pos++){
    console.log("Posicao:  " + pos + " Concessionaria : " + carros [pos]);
}


var motos = new Array("BMW","Yamaha","Honda");

// Calcular a média de todos os numeros de um array

var soma = 0;

for (var pos = 0 ; pos < valores.length; pos++){
     soma += valores[pos];

}


var media = soma/valores.length;

console.log(media);


//Exercicio: localizar o maior valor dentro de um array de numeros

var idade= [18,20,42,29];

Math.max([18,20,29,42]);


console.log(Math.max.apply(null, idade));


//qual é a cidade com maior tamanho na palavra




//

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' '));

var retirado = (arr1.shift());

console.log(arr1);

console.log("posição do numero 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

//exercicio : um array q só tem numero negativo

function numeros5(n1, n2, n3 ,n4, n5){
    let ray = [n1,n2,n3,n4,n5];

    return ray.filter( number => number < 0);
}

console.log(numeros5(12,-2, 4,-3, 6));



//


var arr3 = [1,2,3,4,5,6,7];

arr3.splice(1, 1);

console.log(arr3);





//


var pais = ["Brasil","Argentina","Colombia"];

pais.unshift("Uruguai");

console.log(pais); 


