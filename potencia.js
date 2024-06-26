const prompt = require('prompt-sync')({ sigint: true });

let base = 0;
let expoente = 0;

base = Number(prompt('adicione um numero para a base: '));
expoente = Number(prompt('adicione um numero para o expoente: '));

let resultado = 1;
for (let i = 0; i < expoente; i++) {
    let temp = 0;
    for (let j = 0; j < base; j++) {
        temp += resultado;
        console.log(resultado);
    }
    resultado = temp;
}

console.log(`${base}^${expoente} = ${resultado}`);
