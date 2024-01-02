const imoveis = []
let menu = ""

do{
    menu = prompt("Seja Bem-Vindo(a)\nEscolha uma das opções abaixo:" + 
    "\n1 - Novo imóvel\n2 - Mostrar imóveis\n3 - Sair")

    switch(menu){
        case "1":
            const imovel = {}
            imovel.Dono = prompt("Qual o nome do dono?")
            imovel.Quartos = parseFloat(prompt("Quantos quartos tem na casa?"))
            imovel.banheiro = parseFloat(prompt("Quantos banheiros existem neste imóvel?"))
            imovel.garagem = prompt("Possui garagem? (sim/não)")

            const confirma = confirm(
                "Você deseja salvar este imóvel?" +
                "\nNome do Dono: " + imovel.Dono +
                "\nQuartos: " + imovel.Quartos +
                "\nBanheiro: " + imovel.banheiro +
                "\nPossui garagem: " + imovel.garagem
            )
            if(confirma){
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + ( i + 1 ) +
                    "\nDono: " + imoveis[i].Dono +
                    "\nQuartos: " + imoveis[i].Quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui Garagem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while( menu !== "3");