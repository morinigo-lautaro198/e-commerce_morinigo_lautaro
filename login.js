const sessionAccount = {
    email :"piter@gmail.com",
    password:"piterpool"
}

const form = document.querySelector("form")
const message = document.querySelector("p")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pass = form.elements.password.value
    let email = form.elements.email.value

    if (sessionAccount.email == email && sessionAccount.password == pass) {
        localStorage.setItem("email",email);
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        window.location.href = "./index.html";
    }else{
        form.elements.email.value = ""
        form.elements.password.value = ""
        message.innerText = "usuario o contraseña incorrecto "
    }
})
