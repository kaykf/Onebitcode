function createLabel (text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor= htmlFor
    label.innerText= text
    return label
}

function createInput (id, value, name, type = 'text', placeholder= ""){
    const input = document.createElement('input')
    input.id= id
    input.value= value
    input.name=name
    input.type= type
    input.placeholder= placeholder

    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const newcli = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id= "InputRow-" + rowIndex
    newRow.className = "inputRow"

    const NomeLabel = createLabel('Nome: ', 'techName-'+rowIndex)
    const NomeInput = createInput('techName-'+rowIndex, null, 'techName')

    const cpfLabel = createLabel('CPF: ', 'techcpf-'+ rowIndex)
    const cpfInput = createInput('techcpf-'+rowIndex,null,'techcpf')

    const valorLabel = createLabel('Valor:','techValor-'+rowIndex)
    const valorInput = createInput('techValor-'+rowIndex,null,'techValor', 'number')

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = "button"
    removeRowBtn.innerText= "Remover"
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        NomeLabel,NomeInput,cpfLabel,cpfInput,valorLabel,valorInput,removeRowBtn
    )
    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let Clientes = []
    inputRows.forEach(function (row) {
    const NomeTodo =document.querySelector('#'+row.id+ ' input[name="techName"]').value
    const CpfInput = document.querySelector('#'+ row.id + ' input[name="tachcpf"]').value
    const ResultadoValor = document.querySelector('#'+ row.id + ' input[type= "number"]')

    Clientes.push({nome:NomeTodo,cpf:CpfInput,valor:ResultadoValor})
    })
})
