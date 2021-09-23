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

class Miembro {
	constructor(name, years, rango){
		this.name = name;
		this.years = years;
		this.rango = rango;
	}
	presentar() {
		console.log("Hola, yo soy " + this.name + ", tengo " + this.years + " años y mi rango dentro de NERV es " + this.rango);
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

const piloto0 = new Piloto("Rey Ayanami", 14, "un lugar desconocido", "Unidad 00");
const piloto1 = new Piloto("Shinji Ikari", 14, "Japon", "Unidad 01");
const piloto2 = new Piloto("Asuka Langley", 14, "Alemania", "Unidad 02");

const miembro1 = new Miembro("Misato Katsuragi", 29, "Mayor en Operacion de Combate");
const miembro2 = new Miembro("Ritsuko Akagi", 30, "Jefa del Departamento de Desarrollo Tecnológico");
const miembro3 = new Miembro("Ryoji Kaji", 30, "Agente de Espionaje e Informacion");
const miembro4 = new Miembro("Gendo Ikari", 48, "Comandante");

function ingresoUsuario() {
	alert("bienvenido");
	let nombreUsuario = prompt("identificate ante NERV");
	if (nombreUsuario == "Evangelion") {
		alert("Nos ayudaras a salvar a la humanidad");
	} else {
		alert("Error: ERES UN TRAIDOR");
	}
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

piloto0.presentar();
piloto1.presentar();
piloto2.presentar();

miembro1.presentar();
miembro2.presentar();
miembro3.presentar();
miembro4.presentar();

hideakiAnno.presentar();

ingresoUsuario()
cuestionario()
comandoAccionar()
produccionEvas()
sincronizacion()

/*function calificacion() {
	var clase = parseFloat(prompt("califica las clases"));
	var tutor = parseFloat(prompt("califica al tutor"));
	var profesor = parseFloat(prompt("califica al profesor"));

	var promedio = (clase + tutor + profesor)/3;
	alert("el promedio es de: " + promedio);
}

calificacion()