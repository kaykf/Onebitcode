function calcularMedia(a,b){
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(7,2)
console.log(resultado)

function criarProduto(nome, preço){
    const produto ={
        nome,
        preço,
        estoque: 1
    }
    return produto
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
console.log(notebook)