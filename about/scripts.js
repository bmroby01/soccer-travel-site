// // Show More-Brian div when "More About Brian" button is clicked
//
// const button = document.querySelector(".aboutBtn");
// const divToToggle = document.querySelector("#more-brian");
//
// button.addEventListener("click", ()=>{
//   divToToggle.classList.toggle("hide");
// });
//
// // Show More-Paco div when "More About Brian" button is clicked
//
// const buttonPaco = document.querySelector(".aboutBtnPaco");
// const divToTogglePaco = document.querySelector("#more-paco");
//
// buttonPaco.addEventListener("click", ()=>{
//   divToTogglePaco.classList.toggle("hide");
// });

// Show More-Brian div when "More About Brian" button is clicked

"use strict";

// Show More-Brian div when "More About Brian" button is clicked

var button = document.querySelector(".aboutBtn");
var divToToggle = document.querySelector("#more-brian");

button.addEventListener("click", function () {
  divToToggle.classList.toggle("hide");
});

// Show More-Paco div when "More About Brian" button is clicked

var buttonPaco = document.querySelector(".aboutBtnPaco");
var divToTogglePaco = document.querySelector("#more-paco");

buttonPaco.addEventListener("click", function () {
  divToTogglePaco.classList.toggle("hide");
});
