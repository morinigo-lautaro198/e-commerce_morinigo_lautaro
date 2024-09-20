class Productos{
    constructor(titulo, detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio
        this.stock = stock;
        this.imagen = imagen;

    }
}
    

    let objeto = new Productos("auto rojo","Nuevo de fabrica",9000,20,"https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")
    const productohtml = '<div>titulo : ${Productos.titulo}</div>';
    const main = document.querySelector("main");
    main.innerHTML = productohtml();
    console.log($Productos.titulo)
