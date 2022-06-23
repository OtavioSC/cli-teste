#! /usr/bin/env node
const prompt = require('prompt-sync')();

function reverseString(str){
    let strAux = ""
    for(let index = str.length; index >= 0; index--){
        strAux += str.charAt(index)
    }
    return strAux
}

let str = prompt("Informe uma string: ")
console.log(!isNaN(str) ? "Error: Digite um valor do tipo string 🚫" : reverseString(str))
