let fila = ["Lucas","Matheus","Kyara","Hyago", "kayk"]
let menu= ""

do{
    let pacientes = ""
    for(let i = 0; i < fila.length ; i++){
    pacientes += (i + 1) + " º - " + fila[i] + "\n" }

    menu = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
    )

    switch (menu){
        case "1":
            const novoPaciente = prompt("Qual o nome do novo paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const PacienteConsultado = fila.shift()
            if (!PacienteConsultado){
                alert("Não há pacientes na fila!")
            }else{
                alert(PacienteConsultado +" foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!!")
            break
    }

}while(menu !== "3");