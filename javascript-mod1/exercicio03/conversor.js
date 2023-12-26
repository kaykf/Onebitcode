const metros = parseFloat(prompt("Digite a quantidade de metors: "))
const medidas = prompt("Escolha uma das medidas pelas siglas: \nmilímetros (mm) \ncentímetros (cm) \ndecímetros (dm) \ndecâmetro (dam) \n hectômetro (hm) \n Quilômetro (km)")

switch(medidas){
    case "mm": 
        const mm =((metros*10)*-10)*10
        alert("Resultado: " + mm + " mm")
        break
    case "cm":
        const cm = ((metros * 10) * 10)
        alert("Resultado: " + cm + " cm")
        break
    case "dm":
        const dm = metros * 10
        alert("Resultado: " + dm + " dm")
        break
    case "dam":
        const dam = metros / 10
        alert("Resultado: " + dam + " dam")
        break
    case "hm":
        const hm = (metros / 10)/10
        alert("Resultado: " + hm + " hm")
        break
    case "km":
        const km = ((metros/10)/10)/10
        alert("Resultado: " + km + " km")
        break
    default:
    alert("Valor inválido")
}