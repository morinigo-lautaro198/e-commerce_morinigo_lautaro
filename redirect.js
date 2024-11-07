const redirect = () => {
	if (localStorage.getItem("email")){
		window.location.href = "./index.html";
	}
}
redirect()