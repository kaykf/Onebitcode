function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}
//dobro(5)
//dobro(12)

function digaOla(name = "mundo"){
    alert("Olá, " + name + "!")
}

//digaOla("kayk")
//a = parseFloat(prompt("Qual o valor do primeiro número?"))
//b =parseFloat(prompt("Qual o valor do segundo número?"))

function soma(a,b){
    alert("Resultado da soma é " + (a + b))
}
//soma(a,b)

function criarUsuario(nome,email,senha, tipo = "admin"){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo
    }
    console.log(usuario)
}
criarUsuario("kayk","kayk@gmail.com","1212",)
criarUsuario()