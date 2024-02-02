alert('Bem-vindo(a)! A seguir pediremos que informe alguns dados.')

const nome = prompt("Informe seu nome:")

const idade = prompt("Informe a sua idade:")

const conIdade = confirm("Você realmente tem "+ idade+" anos?")

if(confirm == true){
    repIdade=idade
    alert("Nome: "+ nome +"\nIdade: " + idade+ "\nConfimação da idade: "+ repIdade)
}else{
    alert("Porfavor coloque a sua verdadeira idade")
}
