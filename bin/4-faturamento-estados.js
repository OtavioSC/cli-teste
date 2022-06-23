#! /usr/bin/env node
const faturamentos = [
    ["SP","R$67.836,43"],
	["RJ","R$36.678,66"],
	["MG","R$29.229,88"],
	["ES","R$27.165,48"],
	["Outros", "R$19.849,53"],
]

let total = 0

faturamentos.forEach((item) => {
    item[1] = Number(item[1].replace(/[^0-9.]+/g,""))
    total = total + item[1]
})

function addPercentage(faturamentos, total){
    faturamentos.forEach((item) => {
        item.push(((item[1] / total) * 100).toFixed() + "%")
    })
    return faturamentos
}

console.log(addPercentage(faturamentos, total))
console.log(`${total} faturado`)