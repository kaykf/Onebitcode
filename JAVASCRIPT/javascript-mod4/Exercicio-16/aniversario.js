const dayjs = require("dayjs")

function aniversario(date){
    const aniversario = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(aniversario, 'year')
    const nextAniversario= aniversario.add(ageInYears + 1 , 'year')
    const days = nextAniversario.diff(today, 'day')

    console.log(`Idade: ${ageInYears}`)
    console.log(`Próximo aniversário: ${nextAniversario.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar o próximo aniversário: ${days}`)
}
aniversario("2004-11-17")