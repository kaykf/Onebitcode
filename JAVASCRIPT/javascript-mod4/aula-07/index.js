const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Maracanaú')

console.log({towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Maceió')

console.log({towns,townsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

console.log({townsObj, townsObjClone})