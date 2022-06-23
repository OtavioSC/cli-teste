#! /usr/bin/env node
const prompt = require('prompt-sync')();

function fibonacci(number) {
    const checker = (side) => parseInt(Math.sqrt(side)) * parseInt(Math.sqrt(side)) == side;
    return checker(5 * number * number + 4) || checker (5 * number * number - 4);
}

let number = prompt("Informe um valor para calcular a sequência de fibonnaci: ")

if (isNaN(number)) {
    console.log("Error: Digite um valor do tipo númerico 🚫")
} else {
    console.log(fibonacci(number) ? `${number} faz parte da sequência ✅` : `${number} não faz parte da sequência ❌`)
}

