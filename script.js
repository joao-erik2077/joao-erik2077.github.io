document.querySelector('main').style.opacity = '1';

const sobreBtn = document.getElementById('sobre-btn');
const projetosBtn = document.getElementById('projetos-btn');

const sobre = document.getElementById('sobre');
const projetos = document.getElementById('projetos');

sobreBtn.onclick = () => {
    sobre.style.display = 'flex';
}

projetosBtn.onclick = () => {
    projetos.style.display = 'flex';
}

window.onclick = event => {
    if (event.target == sobre) {
        sobre.style.display = "none";
    } else if (event.target == projetos) {
        projetos.style.display = "none";
    }
}