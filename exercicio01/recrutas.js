 const primeiroNome= prompt("Informe o primeiro nome:")
 const sobrenome= prompt("Informe o sobrenome do recruta:")
 const campoDeEstudo= prompt("Qual o campo de estudo do recruta:")
 const anoDeNascimento= prompt("Qual o ano de nascimento do recruta:")
const idade = (2023-anoDeNascimento)

 
 alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome + 
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + idade
 )