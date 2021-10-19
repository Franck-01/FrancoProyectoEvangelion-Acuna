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
}
function mari() {
alert('la proxima piloto');

const contenidoAdicional = document.getElementById("contAd");
const adicional = document.createElement("div");

const contenido = {
	titulo: "Mari Illustrious Makinami",
	item1: "Una chica con un gusto extraño por el LCL (liquido que usan los pilotos para sincronizacion con los Evas",
	item2: "Y con una actitud muyexcentrica y ligeramente alocada",
};
adicional.innerHTML = `
					<h1>${contenido.titulo}</h1>
					<p>${contenido.item1}</p>
					<p>${contenido.item2}</p>
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
//Asociamos el evento change a todos los inputs
$(".carga").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
});
}
