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
        window.location.href = "./index.html";
        localStorage.setItem("email",email);
    }else{
        message.innerText = "usuario o contraseña incorrecto "
    }
})
