
var nomes = ["Guilherme","Manuel","Samuel","Davi","João"];

nomes.unshift("Mônica");

console.log(nomes);

nomes.splice(5, 1);

console.log(nomes);

console.log("Posição do Samuel: " + nomes.indexOf("Samuel"));

nomes.splice(2, 1, "Emanuel");

console.log(nomes);

----

var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi","Manuela"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);


----

var trimestres = [];

trimestres [1] = "Janeiro,Fevereiro,Março"
trimestres [2] = "Abril,Maio,Junho"
trimestres [3] = "Julho,Agosto,Setembro"
trimestres [4] = "Outubro,Novembro,Dezembro"

for (var pos = 1; pos < trimestres.length; pos++) {
    // Determinando a ordem do trimestre
    var ordem;
    switch (pos) {
        case 1:
            ordem = "Primeiro";
            break;
        case 2:
            ordem = "Segundo";
            break;
        case 3:
            ordem = "Terceiro";
            break;
        case 4:
            ordem = "Quarto";
            break;
    }
    console.log(ordem + " trimestre: " + trimestres[pos]);
}
