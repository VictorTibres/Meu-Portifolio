let escolha = 'chá'; 

let valor;
let bebida;

switch (escolha.toLowerCase()) {
    case 'café':
        bebida = 'Café';
        valor = 4.00;
        break;
    case 'leite':
        bebida = 'Leite';
        valor = 2.00;
        break;
    case 'chá':
        bebida = 'Chá';
        valor = 3.00;
        break;
    default:
        console.log("Escolha inválida. A escolha deve ser entre café, leite ou chá.");
        bebida = null;
        valor = null;
        break;
}

if (bebida && valor !== null) {
    console.log(`Você escolheu ${bebida}. O valor a ser pago é R$ ${valor.toFixed(2)}.`);
}

//


