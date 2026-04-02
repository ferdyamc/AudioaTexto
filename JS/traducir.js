const dropdown = document.getElementById("lang-dropdown")
const btn = document.getElementById("lang-btn");

const menu = document.getElementById("lang-menu");
const items = document.querySelectorAll(".lang-item");
let idiomaSeleccionado = null;

btn.addEventListener("click", function (e) {  
    e.stopPropagation(); // 🔥 evita que se cierre al instante
    let textoBtn = btn.innerHTML;
    if (menu.style.display === "block") {
        menu.style.display = "none";
        btn.style.borderBottomLeftRadius = "8px";
        btn.style.borderBottomRightRadius = "8px";
        textoBtn = textoBtn.slice(0, -1) + "▼";
        
    } else {
        menu.style.display = "block";
        btn.style.borderBottomLeftRadius = "0px";
        btn.style.borderBottomRightRadius = "0px";
        textoBtn = textoBtn.slice(0, -1) + "▲";
        
    }
    btn.innerHTML =textoBtn;
});


items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    menu.style.display = "none";
    btn.style.borderBottomLeftRadius = "8px";
    btn.style.borderBottomRightRadius = "8px";
    idiomaSeleccionado = item.dataset.lang;
    btn.innerHTML = item.innerHTML + " ▼";
    traducir(idiomaSeleccionado);
  });
});


function traducir(idioma) {
  const combo = document.querySelector(".goog-te-combo");

  if (!combo) {
    setTimeout(() => traducir(idioma), 500);
    return;
  }

  combo.value = idioma;
  combo.dispatchEvent(new Event("change"));
}