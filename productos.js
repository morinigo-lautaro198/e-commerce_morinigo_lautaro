class Productos {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

let objeto = new Productos(
    "auto rojo",
    "Nuevo de fabrica",
    9000,
    20,
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
);

let productohtml = `
    <div>
        <h2>${objeto.titulo}</h2>
        <p>${objeto.detalle}</p>
        <p>Precio: $${objeto.precio}</p>
        <p>Stock: ${objeto.stock}</p>
        <img src="${objeto.imagen}" width="300" height="200">
    </div>
`;

const main = document.querySelector("main");
main.innerHTML = productohtml;

