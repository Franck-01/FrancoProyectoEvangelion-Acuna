const URL = "./Json/data.json"

$.getJSON(URL, (res) => {
    console.log(res)

    res.forEach((datos) => {

        $('#hideaki').append(`
            <li>
                <h3>Frase: ${datos.frase}</h3>
                <h3>Informacion: ${datos.info}</h3>
            </li>       
        `)
    })
})

$('#activa').click( () => {
    $('#hideaki').slideDown(1000)
})
$('#desactiva').click( () => {
    $('#hideaki').slideUp(1000)
})