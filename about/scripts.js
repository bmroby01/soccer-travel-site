// Show More-Brian div when "More About Brian" button is clicked

const button = document.querySelector(".aboutBtn");
const divToToggle = document.querySelector("#more-brian");

button.addEventListener("click", ()=>{
  divToToggle.classList.toggle("hide");
});
