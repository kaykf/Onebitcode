const piloto = prompt("Informe o nome do piloto:")



const acelerar = confirm("Sua velocidade atual é de 0 km/h, você deseja aumentar essa velocidade? ")

if(acelerar == true){
    const velocidade = parseFloat(prompt("Qual velocidade você deseja atingir? "))
    alert("A nave do piloto "+piloto+" agora está a "+ velocidade + " km/h!!")
}else{
    alert("OK, continue parado.")
}