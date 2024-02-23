function normalSoma(a,b){
    return a+b
}
console.log(`Soma Normal: ${normalSoma(2,2)}`)

const anonymosSoma = function (a,b){
    return a+b
}
console.log(`Soma Anônima: ${anonymosSoma(2,2)}`)

const arrowSoma = (a,b) => {
    return a+b
}
console.log(`Soma com arrow grande: ${arrowSoma(2,2)}`)

const Sub = (a,b) => a-b
console.log(`Subtração com arrow: ${Sub(8,4)}`)

const dobro = n => `O dobro de ${n} é ${n * 2}`
const numero = 21
console.log(dobro(numero))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
const achar = towns.filter(town => town[0] === 'P')
console.log(achar)