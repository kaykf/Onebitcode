const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//add elementos
//push
let tamanho = arr.push("Kayk")
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift("Felipe")
console.log(arr)
console.log(tamanho)

//remover elementos 
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
//includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)

// Cortar e concatenar
//slice
const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, "Kayk", "Felipe")
console.log(sociedade)

//substituição dos elementos
//ou remover um grupo os trocando por nada
//splice
const elementosRemovidos = sociedade.splice(indice,1,"Gandalf o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

//iterando sobre os elementos

for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição "+ indice)
}