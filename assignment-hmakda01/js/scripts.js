"use strict";

menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "X" ? "≡" : "X";
});

const print = document.getElementById("print");
print.addEventListener("click", function(){
  window.print();
});
