
const lunch = document.querySelector('.plates')
const desserts = document.querySelector('.desserts')
const drinks = document.querySelector('.drinks')

document.querySelector('#Lunch').addEventListener('click', lunchPlates)
document.querySelector('#Desserts').addEventListener('click', dessertPlates)
document.querySelector('#Drinks').addEventListener('click', beverages)

function lunchPlates(){
	desserts.classList.add('desserts')
	drinks.classList.add('drinks')
	lunch.classList.toggle('plates')
}

function dessertPlates(){
	lunch.classList.add('plates')
	drinks.classList.add('drinks')
	desserts.classList.toggle('desserts')
}

function beverages(){
	lunch.classList.add('plates')
	desserts.classList.add('desserts')
	drinks.classList.toggle('drinks')
}




