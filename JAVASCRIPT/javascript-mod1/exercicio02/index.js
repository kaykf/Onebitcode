const carro1 = prompt("Qual o nome do primeiro carro?")
const velocidade1= prompt("Qual a velocidade do primeiro carro?")
const carro2 = prompt("Qual o nome do segundo carro?")
const velocidade2= prompt("Qual a velocidade do segundo carro?")

const vel1= parseFloat(velocidade1)
const vel2= parseFloat(velocidade2)

if(vel1>vel2){
    alert(carro1 + " Estava mais rápido!")
}
else if(vel1<vel2){
    alert(carro2+ " estava mais rápido")
}
else{
    alert("Empatee!!")
}