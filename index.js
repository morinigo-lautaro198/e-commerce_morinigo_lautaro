function insertarauto(){
  const h1 = document.querySelector("h1");
  
  const section = document.querySelector("section");
  h1.innerText = "Productos";
  
  const a = document.querySelector("a");
  a.innerText = "Ver mas";
  
  let array = []
  
  for (let i = 1; i < 9; i++) {
  
      array.push(` <div class="card" style="width: 18rem;">
    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card ${i}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`)
  
  section.innerHTML = array.join().replaceAll(",", "");
  }
  }
  insertarauto()