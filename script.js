let btn_LightMode = document.querySelector("#lightMode"); //Botón de modo claro
let btn_DarkMode = document.querySelector("#darkMode"); // Botón de modo oscuro
let icon_light = document.getElementById("icon-mode-light"); // Ícono de sol
let icon_dark = document.getElementById("icon-mode-dark"); // Ícono de luna

let main = document.getElementById("main"); // Cuerpo de la página o main

// Aplica el modo oscuro ni bien cargue la página
window.addEventListener('load', function() {
    btn_DarkMode.classList.toggle("mode-background");
    main.classList.add("dark-mode");
    icon_light.style.display = "none";
})

let buttons = [btn_LightMode, btn_DarkMode]; // Almacena los dos botones de apariencia de la página

// Eventos al clicar un botón de apariencia
buttons.forEach(function(btn, index, arr) {
    btn.addEventListener('click', function() {
        let j = (index === 0) ? 1 : 0; // Iguala 'j' al índice del boton que NO se presionó

        if (!arr[j].classList.contains("mode-background")) {
            return;
        }

        arr[j].classList.remove("mode-background");
        arr[index].classList.add("mode-background");
        if (index == 0) {
            main.classList.remove("dark-mode");
            main.classList.add("light-mode");
            icon_dark.style.display = "none";
            icon_light.style.display = "block";
        } else {
            main.classList.remove("light-mode");
            main.classList.add("dark-mode");
            icon_light.style.display = "none";
            icon_dark.style.display = "block";
        }
    })
})



















/* 
// Eventos que suceden en el modo CLARO
btn_LightMode.addEventListener('click', function() {
    if (btn_DarkMode.classList.contains("mode-background")) {
        btn_DarkMode.classList.remove("mode-background");
        btn_LightMode.classList.add("mode-background");
        main.classList.remove("dark-mode");
        main.classList.add("light-mode");
    }
})

// Eventos que suceden en el modo OSCURO
btn_DarkMode.addEventListener('click', function() {
    if (btn_LightMode.classList.contains("mode-background")) {
        btn_LightMode.classList.remove("mode-background");
        btn_DarkMode.classList.add("mode-background");
        main.classList.remove("light-mode");
        main.classList.add("dark-mode");
    }
}) */