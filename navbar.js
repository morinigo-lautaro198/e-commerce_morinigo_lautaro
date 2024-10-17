let botones =[
    {texto: "Home", href: "index.html"},
    {texto: "History", href: "#"},
    {texto: "Pricing", href: "#"}];
const header = document.querySelector("header");


let menu = []

for (let boton of botones){
        menu.push(`<a class="nav-item" href=${boton.href}>${boton.texto}</a>`);
}
header.innerHTML = menu.join().replaceAll(",", "");