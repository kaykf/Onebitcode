let pessoa = {
    nome: "kayk",
    idade: 19,
    dizerOla(){
        console.log("Olá,Mundo! Meu nome é "+ this.nome + " e eu tenho "+ this.idade + " anos.")
    }
}
console.log(pessoa)

pessoa.dizerOla()