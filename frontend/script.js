let contador = 0;

const botao = document.getElementById("btnClique");
const display = document.getElementById("contador");

botao.addEventListener("click", function () {
    contador++;
    display.textContent = contador;
});