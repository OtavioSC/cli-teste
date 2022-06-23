#! /usr/bin/env node
const fs = require('fs');
const { join } = require('path')
const dataPath = join(__dirname, './faturamentos/dados.json')
const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const dayValues = []
json.map(({valor}) => valor > 0 ? dayValues.push(valor) : '' )

const dayValuesOrganized = dayValues.sort((a,b) => a - b );

function calculateAverage(values){
    let average = 0;
    values.forEach((item) => average += item)
    return average = average / values.length
}

function moreThanAverage(values) {
    let average = calculateAverage(values)
    let numberOfDays = 0;
    values.forEach((item) => item > average ? numberOfDays++ : false)
    return numberOfDays;
}

console.log(`Maior valor faturado R$${dayValuesOrganized[0]}`)
console.log(`Menor valor faturado R$${dayValuesOrganized[dayValuesOrganized.length - 1]}`)
console.log(`${moreThanAverage(dayValuesOrganized)} dias do mês em que o valor de faturamento diário foi superior à média mensal`)