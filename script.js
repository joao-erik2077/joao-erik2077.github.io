const content = document.getElementById('content');
let actualSegment;

sobre();

function sobre() {
    if(actualSegment !== 'sobre') {

        actualSegment = 'sobre';

        content.innerHTML =
        '<div class="sobre">' +
            '<img class="avatar-img" src="https://avatars.githubusercontent.com/u/79710675?v=4" alt="Profile Picture">' +
            '<div class="content">' +
                '<h1>Olá devs!</h1>' +
                '<p> -> Eu sou João Érik da Silva Crisóstomo, estudante de Desenvolvimento de Sistemas.</p>' +
                '<h3>Habilidades</h3>' +
                '<h2>-> Linguagens</h2>' +
                '<p>Java, Javascript, Typescript, Kotlin, </p>' +
                '<h2>-> FrameWorks</h2>' +
                '<p>Bootstrap, Springboot, Angular, Ionic</p>' +
            '</div>' +
        '</div>';

        fadeInContent();
    }
}
function dados() {}
function projetos() {}
function tecnologias() {}

function fadeInContent() {
    content.style.opacity = '1';
}