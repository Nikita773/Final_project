"use strict";

var main = document.querySelector(".gallery-photos__main-thumbnail img");
var gallery = document.querySelector(".gallery-photos__thumbnail");
var thumbnail = document.querySelectorAll(".gallery-photos__thumbnail a");
gallery.addEventListener("click",function(e){
	main.src = e.target.previousElementSibling.src;
	for(var i=0;i<thumbnail.length;i++){
		if(thumbnail[i].classList.contains("active")){
			thumbnail[i].classList.remove("active");
		}
		e.target.parentElement.classList.add('active');
	}
	e.preventDefault(); 
});

var size = document.querySelector(".gallery-info__links_size");
var color = document.querySelector(".gallery-info__links_color");
var size_links = document.querySelectorAll(".gallery-info__links_size .gallery-info__link");
var color_links = document.querySelectorAll(".gallery-info__links_color .gallery-info__link");
size.addEventListener("click", function(e){
	for(var i=0;i<size_links.length;i++){
		if(e.target.classList.contains("gallery-info__link")){
			if(size_links[i].classList.contains("active")){
				size_links[i].classList.remove("active");
			}
			e.target.classList.add('active');
		}
	}
	e.preventDefault(); 
});
color.addEventListener("click", function(e){
	for(var i=0;i<color_links.length;i++){
		if(e.target.classList.contains("gallery-info__link")){
			if(color_links[i].classList.contains("active")){
				color_links[i].classList.remove("active");
			}
			e.target.classList.add('active');
		}
	}
	e.preventDefault(); 
});

// Localstorage item start //
var item = document.querySelectorAll('.gallery-info');
item[0].querySelector('.gallery-info__btn a').onclick = function addToCart(){
	var cartData = getCartData() || {},
	itemTitle = document.getElementsByClassName('gallery-info__title')[0].innerHTML,
    itemPrice = document.getElementsByClassName('gallery-info__price')[0].innerHTML,
    itemSize =  size.getElementsByClassName('gallery-info__link active')[0].innerHTML,
    itemColor = color.getElementsByClassName('gallery-info__link active')[0].innerHTML,
    itemImg = document.querySelector('.gallery-photos__main-thumbnail img').src,
    itemId = itemTitle + ' ' + itemSize + ' ' + itemColor;

	if(cartData.hasOwnProperty(itemId)){
		cartData[itemId][5]++;
	}
	else {
		cartData[itemId] = [itemPrice, itemTitle, itemColor, itemSize, itemImg, 1];
    }
    setCartData(cartData);
    return false;
}
// Localstorage item end //
