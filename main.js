console.log("Hello World!")

let number1 = 4
let number2 = 2
let name = 'fabio'
let boleano = true

console.log (number1 + number2)
console.log(typeof(number1))

if(typeof(number1) == 'number') {
    console.log(`${number1} É um número`)
} else {
    console.log('Não é um número')
}

if(typeof(name) == 'string') {
    console.log(`${name} É uma string`)
} else {
    console.log('Não é um número')
}

if(typeof(boleano) == 'boolean') {
    console.log(`${boleano} É um booleano`)
} else {
    console.log('Não é um booleano')
}

console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)

let check = number1 % 2

if(check == 0) {
    console.log(`${number1} É um número par`)
} else {
    console.log('Não é um número par')
}

if(check != 0) {
    console.log(`${number1} É um número impar`)
} else {
    console.log('Não é um número impar')
}