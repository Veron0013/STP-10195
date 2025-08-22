export function clearElement(element) {
	element.innerHTML = '';
}
export function removeClassElement(element, className) {
	element.classList.remove(className);
}
export function addClassElement(element, className) {
	element.classList.add(className);
}
export function toggleClassElement(element, className) {
	element.classList.toggle(className);
}

export function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
