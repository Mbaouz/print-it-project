const slides = [
	{ //0
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{ // 1
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{ // 2
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{ // 3
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");
const img = document.querySelector(".banner-img")
const paragraph = document.querySelector("#banner p")
const dots = document.querySelectorAll(".dot")
let index = 0;

function calculPosition (){
	let max = slides.length - 1 ;
	if (index < 0)
	index = max;
    if (index > max)
	index = 0 ;

	
} 

arrow_left.addEventListener("click", function () {
	console.log(slides.length - 1)
	dots[index].classList.remove("dot_selected")
	index--
	calculPosition()
	dots[index].classList.add("dot_selected")
	const newImage = slides[index]
	img.src = newImage.image
	paragraph.innerHTML = newImage.tagLine
	
	
		
	
	// Verifier que l'index ne passe jamais en dessous de 0
});

arrow_right.addEventListener("click", function () {
	console.log("click sur fleche droite")
	dots[index].classList.remove("dot_selected")
	index++
	calculPosition()
	dots[index].classList.add("dot_selected")
	const newImage = slides[index]
	img.src = newImage.image
	paragraph.innerHTML = newImage.tagLine

	
	

	
	
	
	
	

	
});