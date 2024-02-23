const turista = prompt("Qual seu nome: ")
let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade (sim/não)")

while ( continuar === "sim"){
    let cidade = prompt("Qual cidade você visitou? ")
    cidades += " - " + cidade +"\n"
    contagem++
    continuar = prompt("Você já visitou mais alguma cidade? (sim/não)")
}

alert(
    "Turista: " + turista + 
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)