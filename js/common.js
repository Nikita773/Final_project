"use strict";

var menu = document.querySelector(".header__menu");
var burger = document.querySelector(".header__burger");
burger.addEventListener("click",function(){
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

var search = document.querySelector('.nav__item_search')
var search_input = search.querySelector('.search-input')
if(innerWidth >= 768 && innerWidth <= 1128){
	search_input.style.display = 'none'
	search.addEventListener('click', function(){
		if(innerWidth >= 768 && innerWidth <= 1128){
			if(search_input.style.display === 'none'){
				search_input.style.display = 'block'
			}
			else {
				search_input.style.display = 'none'
			}
		}
	})
}

var mobile_searh = document.querySelector('.header__menu').querySelector('.search-input')
mobile_searh.addEventListener('click', function(e){
	e.preventDefault()
})

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}