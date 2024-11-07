let botones = [
    {texto: "Home", href: "index.html"},
    {texto: "History", href: "#"},
    {texto: "Pricing", href: "#"}
];

const header = document.querySelector("header");
let menu = [];

// Genera los enlaces de navegacion
for (let boton of botones) {
    menu.push(`<a class="nav-item" href="${boton.href}">${boton.texto}</a>`);
}

// Verifica si hay un email en localStorage y agrega el <span> o el enlace de inicio de sesion
menu.push(localStorage.getItem("email") 
    ? `<span class="color" style="cursor: pointer">${localStorage.getItem("email")}</span> | <span class="color" style="cursor: pointer" onclick="logout()">Cerrar sesión</span>`
    : `<a href="login.html" class="text-decoration-none">Iniciar Sesión</a>`
);

// Inserta el menu en el header
header.innerHTML = menu.join("");

// Función de cierre de sesion
function logout() {
    localStorage.clear();
    location.href = "index.html"; // Redirige a la pagina de inicio
}

