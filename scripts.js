
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }


}


// Show More-Brian div when "More About Brian" button is clicked

//function showMoreButton() {
 //   const p = document.getElementById('more-brian');
 //   if (p.className == 'hide') {
//        p.toggleClass
 //   }
//}

//const button = document.querySelector('.aboutBtn');
//const p = document.querySelector('#more-brian');

//button.addEventListener('click', () =>{
 //   p.classList.toggle("hide");
//});

var button = document.querySelector(".aboutBtn");
var divToToggle = document.getElementById("#more-brian");

button.addEventListener('click', function() {
    divToToggle.classList.toggle("hide");
});

