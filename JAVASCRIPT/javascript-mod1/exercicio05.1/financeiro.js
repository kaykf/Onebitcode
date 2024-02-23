let menu = ""
let dinheiro = 0
dinheiro = parseFloat(prompt("Seja Bem-Vindo(a)" +
"\nQuanto você possui? "))

do{
    menu = prompt("Seja Bem-Vindo(a)" +
    "\n Saldo disponível: R$ " + dinheiro +
    "\nEscolha uma das opções:" +
    "\n1-Adicionar" +
    "\n2-Remover Dinheiro" +
    "\n3-Sair")
    switch(menu){
        case "1":
            adicao = parseFloat(prompt("Quanto você quer adicionar?"))
            dinheiro += adicao
            alert("Você possui " + dinheiro + " R$")
            break
        case "2":
            subtracao = parseFloat(prompt("Quanto você quer remover?"))
            dinheiro -= subtracao
            alert("Você possui "+ dinheiro + " R$")
            break
        case "3":
            alert("Encerrando Programa")
            break
        default:
            alert("Opção inválida!!")
    }

}while(menu!=="3")