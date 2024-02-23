/*const arr = [
    "1º Nível",
    ["2º Nível", 42 , true],
    ["2º nível",45 , false],
    [
        ["3º Nível, 1º item","Olá mundo!"],
        ["3º Nível, 2º item,","oi mundo!"],
    ],
    []
]
console.log(arr)
console.log(arr[0])
console.log(arr[1][0])
console.log(arr[2][2])
console.log(arr[3][0][1])
console.log(arr[3][1][1])*/

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  /*console.table(matriz)
  matriz.push(["Nova linha"])
  matriz[0].push("Nova coluna")
  matriz[1].push("Mais uma coluna")
  matriz[3].push("oiiiiiii")

  console.table(matriz)*/

for (let i = 0; i < matriz.length; i++){
    for(let c = 0; c < matriz[i].length; c++){
        const elemento = matriz[i][c]
        console.log("Posição: (" + i + ", " + c + " ) Valor: " + elemento)
    }
}
