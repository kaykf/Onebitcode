const tenis = []
let menu = ""

function lojatenis(nome,preço,){
    const tenisNomes = {
        nome,
        preço,
        estoque: 5
    }
    return tenisNomes
}
const nikeBlaze = lojatenis("Blazer mid", 1500)

const adidasForum = lojatenis("Adidas Forúm", 2000)

const newBalance = lojatenis("New Balance 550", 3000)
alert(nikeBlaze,adidasForum,newBalance)

do{
    menu = prompt("Seja Bem-Vindo(a)" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Vitrine" +
    "\n2 - Nova compra" +
    "\n3 - Vendas do dia" +
    "\n4 - Sair")

    switch(menu){
        case "1":
            for (let i = 0; i < tenis.length; i ++)
            alert("Tênis: " (i + 1)+
            "1 - Nike: " + nikeBlaze +
            "\n2 - Adidas: " + adidasForum +
            "\n3 - New Balance: " + newBalance)
            break
        case "2":

    }

}while( menu !== "4");
