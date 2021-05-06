"use strict";

updateCartTotal();

var removeButtons = document.getElementsByClassName('bag__remove');
var bagList = document.getElementsByClassName('bag__list')[0];
var items = document.getElementsByClassName('bag__item');

for(var i=0; i<removeButtons.length; i++){
	var button = removeButtons[i];
	button.addEventListener("click", function(e){
		e.preventDefault();
		var buttonClicked = e.target;
		buttonClicked.parentElement.parentElement.remove();
		var amount = document.getElementsByClassName('bag-amount')[0];
		amount.innerHTML = parseInt(amount.innerHTML)-1;
		if(items.length === 0){
			bagList.classList.add('empty');
			bagList.innerHTML = 'Your cart is empty!';
		}
		updateCartTotal();
	});
}

for(var i=0; i<items.length; i++){
	var itemElement = items[i];
	itemElement.addEventListener("click", addNumber);
	itemElement.addEventListener("click", subtractNumber);
}

var empty = document.getElementsByClassName('checkout__empty')[0];
empty.addEventListener("click", reomoveItems);
function reomoveItems(e){
	e.preventDefault();
	for (var i = items.length - 1; i >= 0; --i) {
		items[i].remove();
	}
	bagList.classList.add('empty');
	bagList.innerHTML = 'Your cart is empty!';
	updateCartTotal();
}

function addNumber(e){
	var plus = e.target.closest('.plus');
	if(!plus)return;
	else {
		var number = plus.previousElementSibling;
		number.innerHTML = parseInt(number.innerHTML)+1;
	}
	updateCartTotal();
}

function subtractNumber(e){
	var minus = e.target.closest('.minus');
	if(!minus)return;
	else {
		var number = minus.nextElementSibling;
		if(number.innerHTML >= 1){
			number.innerHTML = parseInt(number.innerHTML)-1;
		}
	}	
	updateCartTotal();
}

function updateCartTotal(){
	var items = document.getElementsByClassName('bag__item');
	var total = 0;
	for(var i=0; i<items.length; i++){
		var item = items[i];
		var price = item.getElementsByClassName('bag__cost')[0];
		var quantity = item.getElementsByClassName('number')[0];
		var priceElement = parseFloat(price.innerHTML.replace('£',''));
		var quantityElement = +(quantity.innerHTML);
		total += quantityElement*priceElement;
	}
	total-=15;
	if(total<0){
		total = 0;
	}
	document.getElementsByClassName('bag-cost')[0].innerHTML = '£' + total.toFixed(2) + ' ';
	document.getElementsByClassName('checkout__price')[0].innerHTML = '£' + total.toFixed(2);
	var amount = document.getElementsByClassName('bag-amount')[0];
	amount.innerHTML = String(items.length);
}


// Localstorage cart start //
var cartData = getCartData();
function openCart(){
	var totalItems = '';
	if(cartData !== null){
		for(var items in cartData){
			totalItems +=
			`<div class="bag__item">
				<div class="bag__img">
					<a href="item.html"><div class="img-overlay">View item</div></a>
					<img src="${cartData[items][4]}" alt="item">
					<div class="img-new new">
						<span>New</span>
					</div>
				</div>
				<div class="bag__text">
					<h3 class="bag__title">${cartData[items][1]}</h3>
					<span class="bag__cost">${cartData[items][0]}</span>
					<div class="bag__info">
						<p class="bag__desc">Color: ${cartData[items][2]}</p>
						<p class="bag__desc">Size: ${cartData[items][3]}</p>
						<p class="bag__desc bag__desc_quantity">Quantity:
							<span class="minus">-</span>
							<span class="number">${cartData[items][5]}</span>
							<span class="plus">+</span></p>
					</div>
					<a href="#" class="bag__remove">Remove item</a>
				</div>
			</div>`
		}
		bagList.innerHTML = totalItems;
	}
}
openCart();
// Localstorage cart end //