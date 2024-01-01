const imoveis = []
let menu = ""

do {
    menu = prompt("Bem Vindo(a) ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length + "\n\nEscolha uma opção: \n1 - Novo imóvel\n2 - Listar imóveis\n3 - Sair")

    switch (menu){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Nome do proprietario do imóvel:")
            imovel.quartos = parseFloat(prompt("Este imóvel possui quantos quartos?"))
            imovel.banheiros = parseFloat(prompt("Este imóvel possui quantos banheiros?"))
            imovel.garagem = prompt("Este imóvel possui garagem? (sim/não)")
            
            const comfirma = confirm(
                "Salvar este imóvel?\n" + 
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (comfirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui Garagem? " + imoveis[i].garagem
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
}while(menu !== "3");