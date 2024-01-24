const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev){
    ev.preventDefault()

    const nome = document.querySelector('input[name="nome"]').value
    const ede = document.querySelector('input[name="ede"]').value
    const Tpao = document.querySelector('select[name="Tpao"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector("textarea[name='observations']").value
    
    let salad = ""
    document.querySelectorAll("input[name='salad']:checked").forEach(function (item){
        salad += " - "+ item.value + "\n"
    })
    console.log({
        nome,
        ede,
        Tpao,
        main,
        observations,
        salad
    })
})