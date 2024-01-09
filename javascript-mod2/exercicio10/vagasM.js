const vagas = []

function listarVagas(){
    const listaDeVagas = vagas.reduce((txtFinal, vaga, indice) => {
      txtFinal += indice + ". " 
      txtFinal += vaga.nome
      txtFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return txtFinal
    }, "")

    alert(listaDeVagas)
 }

function novaVaga(){
  const nome = prompt("Qual o nome da vaga?")
  const descricao = prompt("Descreva esta vaga:")
  const dataLimite = prompt("Digite a data limite desta vaga da seguinte forma (dd/mm/aaaa):")

  const confirmacao = confirm(
    "Você deseja salvar a vaga:" +
    "\nNome da vaga: " + nome +
    "\nDescrição: " + descricao + 
    "\nData limite: " + dataLimite
 )

 if(confirmacao){
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("A vaga de "+ nome + " foi salva com sucesso!")
  }
}

function verVaga(){
    const indice =prompt("Informe o indice que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatoEmTxt = vaga.candidato.reduce((txtFinal, candidato) => txtFinal + "\n - " + candidato, "" )

    alert(
      "Vaga nº: " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite.length+
      "\nQuantidade de candidatos: "+ vaga.candidatos.length +
      "\nCandidatos inscritos: " + candidatoEmTxt
    )
}

function candidatoVaga(){
    const candidato = prompt("Digite o nome do candidato:")
    const indice = prompt("Qual o indice da vaga?")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja Inscrever o candidato " + candidato + " para a vaga "+ indice + " ?"
    )

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição feita com sucesso!")
    }
}

function excluirVaga(){
    const indice= prompt("Qual o indice da vaga que você deseja excluir?")
    const vaga = vagas[indice]

    const confirmacao= confirm(
        "Você realmente deseja excluir a vaga de" + vaga.nome+ " ?"
    )
    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluida!")
    }
}

function Menu(){
    const menu= prompt(
        "Escolha uma das opções abaixo:"+
        "\n1 - Listar vaga disponiveis" +
        "\n2 - Criar nova vaga" +
        "\n3 - Visualizar vaga" +
        "\n4 - Inscrever novo candidato a uma vaga"+
        "\n5 - Excluir uma vaga"+
        "\n6 - Sair"
    )
    return menu
}

function executar(){
    let menu = ""

    do {
        menu = Menu()
        switch(menu){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break 
            case "3":
                verVaga()
                break
            case "4":
                candidatoVaga()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Encerrando...")
                break
            default:
                alert("Opção inválida.")
        }

    }while (menu !== "6");
}
    executar()