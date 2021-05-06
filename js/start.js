"use strict";

var slider1 = document.querySelectorAll(".preview-slider-1");
var prev1 = document.querySelector(".prev-1"); 
var next1 = document.querySelector(".next-1");
var slider2 = document.querySelectorAll(".preview-slider-2");
var prev2 = document.querySelector(".prev-2"); 
var next2 = document.querySelector(".next-2");
var newPrice = document.querySelector(".preview-list__new-price");
var oldPrice = document.querySelector(".preview-list__old-price");
var price1 = document.querySelector(".preview-slider-1 .preview-slider__price");
var price2 = document.querySelector(".preview-slider-2 .preview-slider__price");
price1 = +price1.innerHTML.trim().substring(1);
price2 = +price2.innerHTML.trim().substring(1);

function changeCost(price1, price2){
	oldPrice.innerHTML = '£' + (price1 + price2).toFixed(2);
	newPrice.innerHTML = '£' + ((price1 + price2)-15).toFixed(2);
}

function showSlider(slide, prev, next){
	var i = 0;
	slide[i].classList.add("show");
	prev.addEventListener("click", function(e){
		slide[i].classList.remove("show");
		i--;
		if(i < 0) i = slide.length - 1;
		slide[i].classList.add("show");

		if(e.target.closest('.preview-list__item-1') != null){
			price1 = +e.target.closest('.preview-list__item-1').querySelector('.show').querySelector('.preview-slider__price').innerHTML.trim().substring(1);
			changeCost(price1, price2);
		}
		else if(e.target.closest('.preview-list__item-2') != null){
		 	price2 =  +e.target.closest('.preview-list__item-2').querySelector('.show').querySelector('.preview-slider__price').innerHTML.trim().substring(1);
			changeCost(price1, price2);
		}
	});
	next.addEventListener("click", function(e){
		slide[i].classList.remove("show");
		i++;
		if(i >= slide.length) i = 0;
		slide[i].classList.add("show");

		if(e.target.closest('.preview-list__item-1') != null){
			price1 = +e.target.closest('.preview-list__item-1').querySelector('.show').querySelector('.preview-slider__price').innerHTML.trim().substring(1);
			changeCost(price1, price2);
		}
		else if(e.target.closest('.preview-list__item-2') != null){
		 	price2 =  +e.target.closest('.preview-list__item-2').querySelector('.show').querySelector('.preview-slider__price').innerHTML.trim().substring(1);
			changeCost(price1, price2);
		}
	});
}

showSlider(slider1, prev1, next1);
showSlider(slider2, prev2, next2);