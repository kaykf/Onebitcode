const atacante = prompt("Qual o nome do atacante?")
const poderDeAtaque = parseFloat(prompt("Qual o seu poder de ataque?"))

const defensor = prompt("Qual o nome do defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele tem?"))
const poderDeDefesa= parseFloat(prompt("Qual o poder de defesa dele?"))
const escudo = prompt("Ele possui escudo? (Sim/Não")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && escudo === "Não"){
    danoCausado = poderDeAtaque - poderDeDefesa
}
else if (poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + defensor + "\nPontos de vida: " + pontosDeVida + "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)