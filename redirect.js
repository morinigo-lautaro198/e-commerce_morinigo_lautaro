const redirect = () => {
	if (!localStorage.getItem("email")) {
	  location.href = "index.html"; 
	}
  }
  
  redirect(); 
  