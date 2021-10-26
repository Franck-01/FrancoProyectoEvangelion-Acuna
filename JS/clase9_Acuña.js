class Piloto {
	constructor(nombre, edad, origen, piloto) {
		this.nombre = nombre;
		this.edad = edad;
		this.origen = origen;
		this.piloto = piloto;
	}
	presentar() {
		console.log("Me presento, yo soy " + this.nombre + " yo tengo " + this.edad + " años, soy de " + this.origen + " y piloto la " + this.piloto);
	}
}

const hideakiAnno = {
	nombre: "Hideki Anno",
	edad: 61,
	origen: "Tokio, Japón",
	obras: "Evangelion y su saga",
	presentar() {
		console.log("Hola, yo soy " + this.nombre + ", tengo " + this.edad + " años, actualmente estoy viviendo en " + this.origen + " y fui el autor y director de un famoso anime llamado: " + this.obras)
	}
};

function equipo() {
	const equipo = [
		{nombre: "Misato Katsuragi", edad: 29, genero: "Femenino", rango: "Mayor en Operacion de Combate"},
		{nombre: "Ritsuko Akagi", edad: 30, genero: "Femenino", rango: "Jefa del Departamento de Desarrollo Tecnológico"},
		{nombre: "Makoto Hyuga", edad: 32, genero: "Masculino", rango: "Tecnico Informatico, Teniente Primero"},
		{nombre: "Shigeru Aoba", edad: 30, genero: "Masculino", rango: "Tecnico Informatico, Teniente"},
		{nombre: "Maya Ibuki", edad: 24, genero: "Femenino", rango: "Tecnico Informatico, Sargento Primero"},
		{nombre: "Ryoji Kaji", edad: 30, genero: "Masculino", rango: "Agente de Espionaje e Informacion"},
		{nombre: "Gendo Ikari", edad: 48, genero: "Masculino", rango: "Comandante"},
		{nombre: "Kozo Fuyutsuki", edad: 58, genero: "Masculino", rango: "Vice-Comandante"}
	];
	equipo.sort(function (a, b) {
	  if (a.nombre > b.nombre) {
	    return 1;
	  }
	  if (a.nombre < b.nombre) {
	    return -1;
	  }
	  return 0;
	});
	for (const nombre of equipo) {
		console.log(nombre.nombre, nombre.edad, nombre.genero, nombre.rango);
	}
}

const piloto0 = new Piloto("Rey Ayanami", 14, "un lugar desconocido", "Unidad 00");
const piloto1 = new Piloto("Shinji Ikari", 14, "Japon", "Unidad 01");
const piloto2 = new Piloto("Asuka Langley", 14, "Alemania", "Unidad 02");

function unidad(modelo, piloto, caracteristicas) {
	this.modelo = modelo
	this.piloto = piloto
	this.caracteristicas = caracteristicas
}
const unidades = [
	new unidad("Unidad 00", "Rey Ayanami", "Prototipo de apoyo en combate"),
	new unidad("Unidad 01", "Shinji Ikari", "Puede asimilar y regenrar partes faltantes a partir del consumo de angeles"),
	new unidad("Unidad 02", "Asuka Langley", "El primer modelo para operaciones de combate")
]

localStorage.setItem("unidades", JSON.stringify(unidades))

function ingresoUsuario() {
	let usuario
	let usuarioEnLS = localStorage.getItem("usuario")
	if (usuarioEnLS) {
		usuario = prompt("Identificate ante NERV")
		localStorage.setItem("usuario", usuario)
	} else {
		usuario = usuarioEnLS
	}
	alert("Bienvenido " + usuario + ", contamos contigo para salvar a la humanidad")	
	console.log("Bienvenido " + usuario + ", contamos contigo para salvar a la humanidad")
}

function cuestionario() {
	alert('Antes que nada');

	var pregunta1 = prompt("¿Conoces Evangelion?");
	var pregunta2 = prompt("¿Pilotearias un EVA?");
	var pregunta3 = prompt("¿Estas a favor del proceso de Intrumentalizacion Humana?");
	var pregunta4 = prompt("¿Solo los raros pilotan unidades Evangelion?");
	var pregunta5 = prompt("¿Estas preguntas son extrañas?");

	var positivas = 0;

	if (pregunta1 === "si") {
		positivas += 1;
	}
	if (pregunta2 === "si") {
		positivas += 1;
	}
	if (pregunta3 === "si") {
		positivas += 1;
	}
	if (pregunta4 === "si") {
		positivas += 1;
	}
	if (pregunta5 === "si") {
		positivas += 1;
	}

	var promedio = (positivas * 100) / 5;
	console.log("el promedio de positividad es: " + promedio);
}

function comandoAccionar() {
var comandoAccionar = 397248;
	let clave = prompt("ingresa tu clave de acceso - 397248");
		if (clave == comandoAccionar) {
			console.log("tu comando de acceso es: "+ comandoAccionar);
		} else {
			alert("error de comando");
	}
	switch (comandoAccionar) {
	  case 164523:
	  case 397248:
	  case 997325:
	    console.log("el comando de acceso es: "+ comandoAccionar);
	    break;
	  default:
	    console.log("error de comando");
	    break;
	}
}

function produccionEvas() {
	var success = "0 1 2";
	let exito = prompt("¿Que Unidades Evangelion fueron exitosas?");
	if (exito == success) {
		console.log("los Evangelion exitosos fueron: "+ success);
	} else {
		alert("¿Aun no lo sabes?");
	}
	var fail = 0;

	while (fail < 3) {
		console.log(fail);
	  fail++;
	  if (fail === 3) {
	    continue;
	  }
	  if (fail === 4) {
	    break;
	  }
	  console.log(fail);
	  alert("los evangelion fallidos fueron: 3 4");
	}
}

function sincronizacion() {
	alert("los pilotos entrenan para mantener la calma en situaciones de peligro");
	var estado = prompt("¿Cual seria tu sincronizacion?");
		console.log("tu sincronizacion fue: ", estado);
	alert("Ahora veras el estado de los otros pilotos seleccionados");

	var Shinji = 100
	var Asuka = 100
	var Rei = 100

	if (Shinji === 40) {
		console.log("sincronizacion de entrenamiento de Shinji");
	} else if (Shinji >= 87) {
		console.log("sincronizacion de combate de Shinji");
	}
	if (Asuka === 55) {
		console.log("sincronizacion de entrenamiento de Asuka");
	} else if (Asuka >= 89) {
		console.log("sincronizacion de combate de Asuka");
	}
	if (Rei === 98) {
		console.log("sincronizacion de entrenamiento de Rei");
	} else if (Rei >= 99) {
		console.log("sincronizacion de combate de Rei");
	}
}

function html() {
	let tittle = document.getElementsByTagName("header");
	for (const header of tittle) {
		console.log(header);
	}
	let video = document.getElementsByTagName("section");
	for (const section of video) {
		console.log(section);
	}
	let link = document.getElementsByTagName("aside");
	for (const aside of link) {
		console.log(aside);
	}
}

function boton() {
	alert('DATOS QUE SERAN DE VITAL IMPORTANCIA PARA LA CONTINUACION DE LA PAGINA');

const contenidoAdicional = document.getElementById("contAd");
const adicional = document.createElement("div");

const contenido = {
	titulo: "Inclusion de las peliculas",
	item1: "Evangelion: Death and Rebirth",
	item2: "The End of Evangelion",
	item3: "Evangelion: 1.0 You Are (Not) Alone",
	item4: "Evangelion: 2.0 You Can (Not) Advance",
	item5: "Evangelion: 3.0 You Can (Not) Redo",
	item6: "Evangelion: 3.0+1.0 Thrice Upon a Time",
	texto: "En el contenido adicional se sumará material visual, audio-visual e información sobre los detalles del anime"
};
adicional.innerHTML = `
					<h1>${contenido.titulo}</h1>
					<li>${contenido.item1}</li>
					<li>${contenido.item2}</li>
					<li>${contenido.item3}</li>
					<li>${contenido.item4}</li>
					<li>${contenido.item5}</li>
					<li>${contenido.item6}</li>
					<p>${contenido.texto}</p>
					`;
contenidoAdicional.appendChild(adicional);
}

const modalCerrar = document.getElementById("modal-cerrar")
const modalAbrir = document.getElementById("modal-abrir")
const modalContainer = document.getElementsByClassName("modalC")[0]

modalAbrir.addEventListener("click", () => {
	modalContainer.classList.add("modal-active")
})
modalCerrar.addEventListener("click", () => {
	modalContainer.classList.remove("modal-active")
})

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

ingresoUsuario()
cuestionario()
comandoAccionar()
html()