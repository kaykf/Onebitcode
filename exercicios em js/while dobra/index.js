let dobra = 0

let nome = prompt("Informe o nome da nave:")

let pergunta = prompt("Deseja entrar na dobra?")

while(pergunta === "sim"){
    dobra++
    alert("Nave: " + nome +"\nQuantidade de dobras:"+ dobra)
    break
}



