const titulo = document.getElementById("header-container");
titulo.style.backgroundColor = "#00b069";

const parte2 = document.getElementsByClassName("emergency-tasks")[0];
parte2.style.backgroundColor = "#ff9f84";

const parte3 = document.querySelectorAll(".emergency-tasks h3")
for (let index = 0; index < parte3.length; index += 1) {
    parte3[index].style.backgroundColor = "#a536f3";
}
const parte4 = document.querySelector('.no-emergency-tasks');
parte4.style.backgroundColor = "#f9db5e";

const parte5 = document.querySelectorAll(".no-emergency-tasks h3")
for (let index = 0; index < parte5.length; index += 1) {
    parte5[index].style.backgroundColor = "#000000";
}

const parte6 = document.getElementById("footer-container");
parte6.style.backgroundColor = "#003533";


