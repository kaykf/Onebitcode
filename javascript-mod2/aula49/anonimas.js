function somar(a,b){
    return a + b
}

const operacao = somar

console.log(operacao(4,4))

const subtrair = function (a,b){
    return a-b
}

console.log(subtrair(5,2))
const calculadora = {}

calculadora.somar = somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function (a,b){
    return a * b
}
calculadora.dividir = function (a,b){
    return a / b
}

console.log(calculadora.multiplicar(5,5))