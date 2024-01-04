function calcular (a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a , b)
    return resultado
}

function somar (x, y){
    console.log("Realizando uma soma")
    return x + y
}

function subtrair (a, i){
    console.log("Realizando um subtração")
    return a - i
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 3, subtrair))

function exibirElemento(elemento, indice, array){
    console.log({
    elemento,
    indice,
    array
    })
}

const lista = ["maçã", "banana", "laranja", "limão"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)