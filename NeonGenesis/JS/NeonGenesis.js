const URL = "./JSON/data.json"

$.getJSON(URL, (res) => {
    console.log(res)

    res.forEach((episodio) => {

        $('#episodios').append(`
            <li>
                <h3>Episodios: ${episodio.episodios}</h3>
                <h3>Detalles: ${episodio.detalles}</h3>
            </li>
        `)
    })
})

$('#activa').click( () => {
    $('#episodios').slideDown(1000)
})
$('#desactiva').click( () => {
    $('#episodios').slideUp(1000)
})

function misato() {
	const modalCerrar = document.getElementById("modal-cerrar")
	const modalAbrir = document.getElementById("modal-abrir")
	const modalContainer = document.getElementsByClassName("misato")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("katsuragi");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Lider de WILE, encargada de destruir lo poco que queda de NERV",
        item2: "Esposa de Ryoji Kaji, madre de Ryoji Kaji(el hijo que lleva el mismo nombre que su padre)",
        item3: "Frase con la que justifica el que Shinji vuelva a pilotar; El fue quien nos salvo, hace 14 años. Si no fuera por él, todos hubieras muerto",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function ritsuko() {
	const modalCerrar = document.getElementById("modal-close")
	const modalAbrir = document.getElementById("modal-open")
	const modalContainer = document.getElementsByClassName("ritsuko")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("akagi");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Es la Vice-Comandante de WILLE, la subordinada directa de Misato Katsuragi",
        item2: "Cientifica jefe, encargada de restaurar el ambiente de la tierra para que sea habitable",
        item3: "Frase que le dice a Gendo tras dispararle; No me detengo hasta cumplir mi objetivo, como usted",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function kaji() {
	const modalCerrar = document.getElementById("kaji-close")
	const modalAbrir = document.getElementById("kaji-open")
	const modalContainer = document.getElementsByClassName("kaji")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("ryoji");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "...para detener el Tercer Impacto alguien devia sacrificarse...",
        item2: "Esposo de Misato, padre de Ryoji Kaji",
        item3: "Frase que le dice a Misato antes de partir; Misato... ahora dejo todo en tus manos",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function gendo() {
	const modalCerrar = document.getElementById("gendo-close")
	const modalAbrir = document.getElementById("gendo-open")
	const modalContainer = document.getElementsByClassName("gendo")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("ikari");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Continua con sus planes, aunque eso signifique la extincion total de la vida",
        item2: "Se enfrenta a su hijo, al no ser capaz de comprender la realidad, quiere alterarla",
        item3: "Palabras que pronuncia al estar junto a su hijo; Yui!...ahora lo entiendo, simpre estuviste con Shinji... y yo no lo estuve",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function rei() {
	const modalCerrar = document.getElementById("rei-close")
	const modalAbrir = document.getElementById("rei-open")
	const modalContainer = document.getElementsByClassName("rei")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("ayanami");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Sigue ordenes, ordenes dictadas por Gendo Ikari... ¿Qué haria la Rei original?",
        item2: "Aprende una vida, una vida sin Evas, sin Gendo... una vida tranquila junto a Shinji... o eso le gustaria tener",
        item3: "Palabras que le pronuncia a Shinji; Lo siento mucho, no logre cumplir mi promesa, de que ya no debas subir a un Eva",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function asuka() {
	const modalCerrar = document.getElementById("asuka-close")
	const modalAbrir = document.getElementById("asuka-open")
	const modalContainer = document.getElementsByClassName("asuka")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("shikinami");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Mantiene su lucha contra las maquinas de NERV, junto a su Eva-02; una especie de comando desde el frente o tambien llamada SU ALTEZA",
        item2: "En su intento de destruir el ultimo Evangelion, Gendo le tiende una trampa. Y su mente es atrapapa y corrompida, por la Asuka original... ¿Osea, que yo era un clon?",
        item3: "Testimonia dicho hacia Shinji; Alguna vez me gustate, pero ya no es el caso",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function shinji() {
	const modalCerrar = document.getElementById("shinji-close")
	const modalAbrir = document.getElementById("shinji-open")
	const modalContainer = document.getElementsByClassName("shinji")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})
    const contenidoAdicional = document.getElementById("IKARI");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Se siente insignificante, inutil. Pero recorre los territorio con humanos supervivientes (villas civiles), dandose un motivo para pelear y enfrentarse a su padre",
        item2: "Shinji vuelve a pilotar el Eva-01, con el apoyo de Misato y Ritsuko: ...conoci a tu hijo, Misato. Me cayo bien y fue amable",
        item3: "Tras enfrentarse a su padre, solo le queda un ultimo paso, un deseo final: deseo que los Evas... jamas hubiesen existido",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function kaworu() {
	const modalCerrar = document.getElementById("kaworu-close")
	const modalAbrir = document.getElementById("kaworu-open")
	const modalContainer = document.getElementsByClassName("kaworu")[0]

	modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
	})
	modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
	})

    const contenidoAdicional = document.getElementById("nagisa");
    const adicional = document.createElement("div");

    const contenido = {
        item1: "Esta dispuesto a sacrificarse con el fin de aligerar la carga de Shinji",
        item2: "Le enseña a Shinji a tocar el piano, aunque no tenga conocimiento previo; Dejate fluir con las notas",
        item3: "Una simple pregunta; ¿Cual es tu deseo Shinji?",
    };
    adicional.innerHTML = `
                        <p>${contenido.item1}</p>
                        <p>${contenido.item2}</p>
                        <p>${contenido.item3}</p>
                        `;
    contenidoAdicional.appendChild(adicional);
}
function usuario() {

$("body").prepend(`<h4><a class="navbar-brand detalles__transition inicio" href="3.miembros-pilotos.html">Inicio</a></h4>
					<div>
					<h1>Solo para vos</h1>
					<textarea rows="20" cols="100" class="carga">
					Nombre:
					Cargo o designación:
					Edad:
					Una pequeña Historia:
					</textarea>
					</div>`);
}