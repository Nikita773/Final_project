"use strict";

let filtersWrapper = document.querySelector('.dropdown-menu__wrapper');
filtersWrapper.addEventListener('click', function(e){
    if(e.target.classList.contains('dropdown-menu__sub-option') && !(e.target.innerText === 'Not selected')){
        e.target.closest('.dropdown-menu__item').querySelector('.dropdown-menu__selected').innerText = e.target.innerText;
        e.target.closest('.dropdown-menu__item').querySelector('.dropdown-menu__option').classList.add('active');
    } else if(e.target.classList.contains('filter-link') && (e.target.innerText === 'Not selected')){
        e.target.closest('.dropdown-menu__item').querySelector('.dropdown-menu__selected').innerText = '';
        e.target.closest('.dropdown-menu__item').querySelector('.dropdown-menu__option').classList.remove('active');
    }
});

let dropdown = document.querySelector(".dropdown-mobile__list .down");
let close = document.querySelector(".dropdown-mobile__list .close");
let choice = document.querySelector(".dropdown-mobile__choice");
dropdown.addEventListener("click",function(){
	dropdown.classList.toggle("selected");
	choice.classList.toggle("selected");
	close.classList.toggle("selected");
});

close.addEventListener("click",function(){
	dropdown.classList.remove("selected");
	choice.classList.remove("selected");
	close.classList.remove("selected");
});

let option = document.querySelectorAll(".dropdown-mobile__option");
let box = document.querySelectorAll(".dropdown-mobile__wrapper");
let item = document.querySelectorAll(".dropdown-mobile__sub-option");
for(let i=0; i<box.length;i++){
	box[i].addEventListener("click",function(e){
		for(let j=0; j<option.length;j++){
			if((i === j) && !(e.target.innerText === 'Not selected') 
				&& (e.target.classList.contains("dropdown-mobile__sub-option"))){
				if(j<option.length-1){
					option[j].innerText = e.target.innerText + ',';
				}
				else {
					option[j].innerText = e.target.innerText + '';
				}
				option[j].style.color = '#f14a58';
				if(window.innerWidth < 768){dropdown.style.right = '0';}
			}
		}
	});
}