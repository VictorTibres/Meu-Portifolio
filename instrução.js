var pais = "Brasil";

if(pais != "Brasil"){
console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro");
}

var idade = 22;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18 || idade >65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}

// Switch

var bebidas = 1 ;


switch(bebidas){
    case 'café':
        console.log("Café");
        break;
    case 'leite':
        console.log("Leite");
        break;
    case 'chá':
        bebidas = ''
        console.log("Chá");
        break;

    default:
        console.log("Opção inválida. Você pode selecionar entre café,leite ou chá.")
        break; 
}
        if (bebidas.console) {
            console.log(`Você escolheu ${bebidas}`);
        }

     