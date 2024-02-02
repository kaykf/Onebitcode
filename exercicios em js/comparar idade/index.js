const nomeVelho = prompt("Informe o nome da pessoa mais velha:")

const idadeVelho = parseFloat(prompt("Informe a idade da pessoa mais velha:"))

const nomeNovo = prompt("Informe o nome da pessoa mais nova:")

const idadeNovo = parseFloat(prompt("Informe a idade da pessoa mais nova"))

const valorIdade = idadeVelho-idadeNovo

alert("Nome da pessoa mais velha: "+ nomeVelho +
"\nIdade da pessoa mais velha: "+idadeVelho+
"\nNome da pessoa mais nova: "+ nomeNovo+
"\nIdade da pessoa mais nova: "+ idadeNovo+
"\nDiferença de idade: " + valorIdade + " anos")