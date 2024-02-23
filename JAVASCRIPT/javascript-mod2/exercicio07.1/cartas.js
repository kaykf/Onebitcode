let baralho = ["7 de ouro","5 de paus","9 de coração", "11 de diamante"]
let pilha = ""

do{
    let cartas = ""
    for(let i = 0; i < baralho.length ; i++){
    cartas += (i + 1) + " º - " + baralho[i] + "\n" }

    pilha = prompt("Cartas do baralho:\n" + cartas + "\n1 - Adicionar carta\n2 - Puxar carta\n3 - Sair")

    switch(pilha){
        case "1":
            const novaCarta = prompt("Qual a nova carta?")
            baralho.unshift(novaCarta)
            break
        case "2":
            const puxeCarta = baralho.shift()
            if(!puxeCarta){
                ("Não tem mais carta no baralho!!")
            }else{
                alert(puxeCarta + " foi puxada")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!!")
    }
    

}while(pilha !== 3)