let dinheiro = 100

while ( dinheiro >= 0){
    alert("Você tem " + dinheiro + " R$")
    dinheiro -= 10
    alert("Você gastou 10 R$")

    if(dinheiro === 50){
        alert("PARE DE GASTAR!!!")
        break
    }
}

alert("acabou as suas chances")