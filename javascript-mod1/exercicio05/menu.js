let menu = ""

do{
    menu = prompt("MENU\n1- Pagar: \n2- Receber: \n3- Pix: \n4- Avançar: \n5- Encerrar: ")
    
    switch (menu){
        case "1":
            alert("Você escolheu a opção 1-Pagar")
            break
        case "2":
            alert("Você escolheu a opção 2-Receber")
            break
        case "3":
            alert("Você escolheu a opção 3-Pix")
            break
        case "4":
            alert("Você escolheu a opção 4-Avançar")
            break
        case "5":
            alert("Encerrando o programa...")
            break
        default:
            alert("Opção inválida!!")
    }
}while(menu !== "5")