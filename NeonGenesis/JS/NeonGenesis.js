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

class Miembros {
	constructor(nombre, cargo, historia, frase) {
		this.nombre = nombre;
		this.cargo = cargo;
		this.historia = historia;
		this.frase = frase;
	}
}
const katsuragi = new Miembros("Misato Katsuragi", "Lider de WILE, encargada de destruir lo poco que queda de NERV", "Esposa de Ryoji Kaji, madre de Ryoji Kaji (el hijo que lleva el mismo nombre que su padre)", "Frase con la que justifica el que Shinji vuelva a pilotar; El fue quien nos salvo, hace 14 años. Si no fuera por él, todos hubieramos muerto");
const akagi = new Miembros("Ritsuko Akagi", "Es la Vice-Comandante de WILLE, la subordinada directa de Misato Katsuragi", "Cientifica jefe, encargada de restaurar el ambiente de la tierra para que sea habitable", "Frase que le dice a Gendo tras dispararle; No me detengo hasta cumplir mi objetivo, como usted");
const kaji = new Miembros("Ryoji Kaji", "...para detener el Tercer Impacto alguien devia sacrificarse...", "Esposo de Misato, padre de Ryoji Kaji", "Frase que le dice a Misato antes de partir; Misato... ahora dejo todo en tus manos");
const gendo = new Miembros("Gendo Ikari", "Continua con sus planes, aunque eso signifique la extincion total de la vida", "Se enfrenta a su hijo, al no ser capaz de comprender la realidad, quiere alterarla", "Palabras que pronuncia al estar junto a su hijo; Yui!...ahora lo entiendo, simpre estuviste con Shinji... y yo no lo estuve");
const rei = new Miembros("Rei Ayanami", "Sigue ordenes, ordenes dictadas por Gendo Ikari... ¿Qué haria la Rei original?", "Aprende una vida, una vida sin Evas, sin Gendo... una vida tranquila junto a Shinji... o eso le gustaria tener", "Palabras que le pronuncia a Shinji; Lo siento mucho, no logre cumplir mi promesa, de que ya no debas subir a un Eva");
const asuka = new Miembros("Asuka Langley Shikinami", "Mantiene su lucha contra las maquinas de NERV, junto a su Eva-02; una especie de comando desde el frente o tambien llamada SU ALTEZA", "En su intento de destruir el ultimo Evangelion, Gendo le tiende una trampa. Y su mente es atrapapa y corrompida, por la Asuka original... ¿Osea, que yo era un clon?", "Testimonia dicho hacia Shinji; Alguna vez me gustate, pero ya no es el caso");
const ikari = new Miembros("Shinji Ikari", "Se siente insignificante, inutil. Pero recorre los territorio con humanos supervivientes (villas civiles), dandose un motivo para pelear y enfrentarse a su padre", "Shinji vuelve a pilotar el Eva-01, con el apoyo de Misato y Ritsuko: ...conoci a tu hijo, Misato. Me cayo bien y fue amable", "Tras enfrentarse a su padre, solo le queda un ultimo paso, un deseo final: deseo que los Evas... jamas hubiesen existido");
const nagisa = new Miembros("Kaworu Nagisa", "Esta dispuesto a sacrificarse con el fin de aligerar la carga de Shinji", "Le enseña a Shinji a tocar el piano, aunque no tenga conocimiento previo; Dejate fluir con las notas", "Una simple pregunta; ¿Cual es tu deseo Shinji?");

function nerv() {
	const misatoCerrar = document.getElementById("modal-cerrar")
	const misatoAbrir = document.getElementById("modal-abrir")
	const misatoContainer = document.getElementsByClassName("misato")[0]
	    misatoAbrir.addEventListener("click", () => {
	    misatoContainer.classList.add("modal-active")
	    })
	    misatoCerrar.addEventListener("click", () => {
	    misatoContainer.classList.remove("modal-active")
	    })
    const mk = JSON.stringify(katsuragi);
        document.getElementById("misato").innerHTML = mk;

	const ritsukoCerrar = document.getElementById("modal-close")
	const ritsukoAbrir = document.getElementById("modal-open")
	const ritsukoContainer = document.getElementsByClassName("ritsuko")[0]
	    ritsukoAbrir.addEventListener("click", () => {
	    ritsukoContainer.classList.add("modal-active")
	    })
	    ritsukoCerrar.addEventListener("click", () => {
	    ritsukoContainer.classList.remove("modal-active")
	    })
    const ra = JSON.stringify(akagi);
        document.getElementById("ritsuko").innerHTML = ra;

	const ryojiCerrar = document.getElementById("kaji-close")
	const ryojiAbrir = document.getElementById("kaji-open")
	const ryojiContainer = document.getElementsByClassName("kaji")[0]
        ryojiAbrir.addEventListener("click", () => {
        ryojiContainer.classList.add("modal-active")
        })
        ryojiCerrar.addEventListener("click", () => {
        ryojiContainer.classList.remove("modal-active")
        })
    const rk = JSON.stringify(kaji);
        document.getElementById("ryoji").innerHTML = rk;

	const gendoCerrar = document.getElementById("gendo-close")
	const gendoAbrir = document.getElementById("gendo-open")
	const gendoContainer = document.getElementsByClassName("gendo")[0]
        gendoAbrir.addEventListener("click", () => {
        gendoContainer.classList.add("modal-active")
        })
        gendoCerrar.addEventListener("click", () => {
        gendoContainer.classList.remove("modal-active")
        })
    const gendoI = JSON.stringify(gendo);
        document.getElementById("gendo").innerHTML = gendoI;

	const reiCerrar = document.getElementById("rei-close")
	const reiAbrir = document.getElementById("rei-open")
	const reiContainer = document.getElementsByClassName("rei")[0]
        reiAbrir.addEventListener("click", () => {
        reiContainer.classList.add("modal-active")
        })
        reiCerrar.addEventListener("click", () => {
        reiContainer.classList.remove("modal-active")
        })
    const reiAy = JSON.stringify(rei);
        document.getElementById("rei").innerHTML = reiAy;

	const asukaCerrar = document.getElementById("asuka-close")
	const asukaAbrir = document.getElementById("asuka-open")
	const asukaContainer = document.getElementsByClassName("asuka")[0]
        asukaAbrir.addEventListener("click", () => {
        asukaContainer.classList.add("modal-active")
        })
        asukaCerrar.addEventListener("click", () => {
        asukaContainer.classList.remove("modal-active")
        })
    const as = JSON.stringify(asuka);
        document.getElementById("asuka").innerHTML = as;

	const shinjiCerrar = document.getElementById("shinji-close")
	const shinjiAbrir = document.getElementById("shinji-open")
	const shinjiContainer = document.getElementsByClassName("shinji")[0]
        shinjiAbrir.addEventListener("click", () => {
        shinjiContainer.classList.add("modal-active")
        })
        shinjiCerrar.addEventListener("click", () => {
        shinjiContainer.classList.remove("modal-active")
        })
    const si = JSON.stringify(ikari);
        document.getElementById("shinji").innerHTML = si;

	const kaworuCerrar = document.getElementById("kaworu-close")
	const kaworuAbrir = document.getElementById("kaworu-open")
	const kaworuContainer = document.getElementsByClassName("kaworu")[0]
        kaworuAbrir.addEventListener("click", () => {
        kaworuContainer.classList.add("modal-active")
        })
        kaworuCerrar.addEventListener("click", () => {
        kaworuContainer.classList.remove("modal-active")
        })
    const kn = JSON.stringify(nagisa);
        document.getElementById("kaworu").innerHTML = kn;
}
function activar() {
    $("#right").append(`<p>La Historia comienza 15 despues de la casi extincion de la humanidad, ocurrido en el año 2000 con el evento conocido como Segundo Impacto. Un evento catastrofico ocacionado por unos seres Misteriosos llamados angeles. En respuesta la humanidad, comienza a trabajar en las defensas para proximos ataques como este.</p>
                        <p>Aqui es donde nuestro protagonista, Shinji Ikari, llega a NERV (organizacion paramiliar encargada de preservar el futuro de la humanidad), en el mismo dia que se enfrenta a un angel con la Unidad-01. Un bio mecha humanoides llamado Evangelion (acortado a EVA).</p>
                        <p>Con el avance de la historia Shinji va a ir interactuando con otros personajes, enfrentandose a situaciones que no solo le haran peligrar su vida, sino que lo haran cuestionarse su verdadera utilidad, ahora como el Tercer Niño Elegido, y piloto de Evangelion.</p>
                        <p>Conociendo a las otras pilotos, Rei Ayanami, la piloto de la Unidad-00 y la Asuka Landley Sohru, la piloto de la Unidad-02</p>
                        <h2 class="neon__titulos">The End Of Evangelion</h2>
                        <div>
                        <img src="IMG/the_end.jpg" />
                        <div id="despliega" class="col">
                        <input id="despliega" type="button" value="Pelicula" onclick="otra();" />
                        </div>
                        </div>
                        <button id="ocultar">cerrar</button>`);

    $('#visualizar').click(function() {
        $('#right').slideDown(1500)
    })
    $("#ocultar").click(function() {
        $("#right").slideUp(1500)
    })
    const neonGenesis = document.getElementsByClassName("background")[0]
    const Cerrar = document.getElementById("right")
        Cerrar.addEventListener("click", () => {
        neonGenesis.classList.remove("background")
        })
}
function otra() {
   const neonGenesis = document.getElementById("despliega");
    const serie = document.createElement("div");

    const anime = {
        item1: "Al acabar con los angeles, SEELE le envia al ejercito japones a que detenga a NERV, con la falsa escusa de una sublemacion. Los pilotos se esconden, Asuka en su Eva, Shinji intenta escapar junto a Misato de los intrusos y Gendo resguarda a Rei.",
        item2: "Asuka logra activar su unidad Evangelion, y se enfrenta a los enemigos en la superficie. Descubriendo que los oponentes tienen unidades evangelion de produccion en masa, Evas fisicamente debiles, pero resistentes a los ataques. Misato muere, pero lograr cumplir su objetivo, que Shinji logre subir al Eva-01. Solo para contemplar la destruccion del Eva-02... con Asuka dentro de él",
        item3: "Rei, en un acto de traicion contra Gendo Ikari, logra fucionarse con el feto de Adam(su unica forma fisica) y el cuerpo dormido de Lilith... provocando la union prohibida entre las dos semillas e iniciando el Tercer Impacto. Eliminando las barreras fisicas de las almas, uniendolas a todas en una sola."
    };
    serie.innerHTML = `
                    <p>${anime.item1}</p>
                    <p>${anime.item2}</p>
                    <p>${anime.item3}</p>
                    `;
    neonGenesis.appendChild(serie); 
}
nerv()
activar()