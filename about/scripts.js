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

const button = document.querySelector(".aboutBtn");
const divToToggle = document.querySelector("#more-brian");

button.addEventListener("click", ()=>{
  divToToggle.classList.toggle("hide");
});

// Show More-Paco div when "More About Brian" button is clicked

const buttonPaco = document.querySelector(".aboutBtnPaco");
const divToTogglePaco = document.querySelector("#more-paco");

buttonPaco.addEventListener("click", ()=>{
  divToTogglePaco.classList.toggle("hide");
});
