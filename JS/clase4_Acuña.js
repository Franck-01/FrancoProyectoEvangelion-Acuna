alert("bienvenido");
let nombreUsuario = prompt("identificate ante NERV");
if (nombreUsuario == "Evangelion") {
	alert("Nos ayudaras a salvar a la humanidad");
} else {
	alert("Error: ERES UN TRAIDOR");
}

alert('Antes que nada');

var pregunta1 = prompt("¿Conoces Evangelion?");
var pregunta2 = prompt("¿Pilotearias un EVA?");
var pregunta3 = prompt("¿Estas a favor del proceso de Intrumentalizacion Humana?");
var pregunta4 = prompt("¿Solo los raros pilotan unidades Evangelion?");
var pregunta5 = prompt("¿Estas preguntas son extrañas?");

var positivas = 0;

if (pregunta1 === "si") {
	positivas = positivas + 1;
}
if (pregunta2 === "si") {
	positivas = positivas + 1;
}
if (pregunta3 === "si") {
	positivas = positivas + 1;
}
if (pregunta4 === "si") {
	positivas = positivas + 1;
}
if (pregunta5 === "si") {
	positivas = positivas + 1;
}

var promedio = (positivas * 100) / 5;

console.log("el promedio de positividad es: " + promedio);

var comandAx = 397248;

switch (comandAx) {
  case 164523:
  case 397248:
  case 997325:
    console.log("el comando de acceso es: "+ comandAx);
    break;
  default:
    console.log("error de comando");
    break;
}

function prodEvas () {
	var eFail = 0;

	while (eFail < 3) {
		console.log(eFail);
	  eFail++;
	  if (eFail === 3) {
	    continue;
	  }
	  if (eFail === 4) {
	    break;
	  }
	  console.log(eFail);
	  alert("los evangelion fallidos fueron: 3 4");
	}
}

function sincro () {
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









/*function calificacion () {
	var clase = parseFloat(prompt("califica las clases"));
	var tutor = parseFloat(prompt("califica al tutor"));
	var profesor = parseFloat(prompt("califica al profesor"));

	var promedio = (clase + tutor + profesor)/3;
	alert("el promedio es de: " + promedio);
}*/