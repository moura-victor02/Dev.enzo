const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var urlprojeto1 = document.querySelector(".proj1");
urlprojeto1.addEventListener("click", function() {
    window.open("https://moura-victor02.github.io/nav-bar/", "_blank");
});

var urlprojeto1 = document.querySelector(".contact-item");
urlprojeto1.addEventListener("click", function() {
    window.open("mailto:enzomoru3@gmail.com?body=Ol%C3%A1%20Enzo%2C%20tudo%20bem%3F", "_blank");
});
var urlprojeto1 = document.querySelector(".contact-item2");
urlprojeto1.addEventListener("click", function() {
    window.open("https://github.com/moura-victor02", "_blank");
});
var urlprojeto1 = document.querySelector(".contact-item3");
urlprojeto1.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/enzo-victor-718339243", "_blank");
});

var urlprojeto1 = document.querySelector(".proj2");
urlprojeto1.addEventListener("click", function() {
    window.open("https://moura-victor02.github.io/links-page/", "_blank");
});



