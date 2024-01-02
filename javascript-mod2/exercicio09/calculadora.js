function triangulo(){
    const base = parseFloat(prompt("Qual o valor da base?"))
    const altura = parseFloat(prompt("Qual o valor da altura?"))
    return base * altura / 2
}

function retangulo(){
    const base = parseFloat(prompt("Qual o valor da base?"))
    const altura = parseFloat(prompt("Qual o valor da altura?"))
    return base * altura
}

function quadrado(){
    const lado = parseFloat(prompt("Qual o valor do lado?"))
    return lado**2
}

function trapezio(){
    const baseMaior = parseFloat(prompt("Qual o valor da base maior?"))
    const baseMenor = parseFloat(prompt("Qual o valor da base menor?"))
    const altura = parseFloat(prompt("Qual o valor da altura?"))
    return (baseMaior + baseMenor) * altura / 2
}

function circulo(){
    const raio =parseFloat(prompt("Qual o valor do raio?"))
    return (raio ** 2) * 3.14
}

function exibirMenu(){
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}
function executar(){
let menu = ""

do{
    menu = exibirMenu()
    let resultado

    switch (menu) {
        case "1":
            resultado = trapezio()
            break
        case "2":
            resultado = retangulo()
            break
        case "3":
            resultado = quadrado()
            break
        case "4":
            resultado = trapezio()
            break
        case "5":
            resultado = circulo()
            break
        case "6":
            alert("Encerrando...")
        default:
            alert("Opção Inválida")
            break
    }
    if(resultado){
        alert("Resultado: " + resultado)
    }

}while( menu !== "6");
}
executar()