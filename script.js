
let nav = document.querySelector(".navbar");

function opennav(){
nav.style.transform = `translateX(${0}%)`;
}

function closenav(){
    nav.style.transform = `translateX(${100}%)`;
}