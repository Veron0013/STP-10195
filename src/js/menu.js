import * as render from '/js/render-function';

const btn_burger = document.querySelector(".nav-burger");
const mobile_menu = document.querySelector(".modal-menu");
const body = document.body;

btn_burger.addEventListener('click', (e) => {
	btn_burger.disabled = true;
	openCloseModalMenu();
});

mobile_menu.addEventListener('click', (e) => {
	const dataLink = e.target.closest(".nav-link");

	if (!dataLink) return;
	openCloseModalMenu();
});

function openCloseModalMenu() {
	render.toggleClassElement(btn_burger, "active");
	render.toggleClassElement(mobile_menu, "is-open");
	render.toggleClassElement(body, "locked");
	btn_burger.disabled = false;
}

//const burger = document.querySelector('.nav-burger');

//burger.addEventListener("click") => {
//	burger.classList.toggle("active");

//});