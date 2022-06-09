const textoAqui = document.getElementById("texto-aqui");
const boton = document.getElementById("boton");
const ul = document.getElementById("li-container");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const texto = textoAqui.value;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto;

    li.appendChild(p);
    ul.appendChild(li);
});