const content = document.getElementById('content');
let actualSegment;
const timeBetweenTransitions = 1000;

sobre();

function sobre() {
    if(actualSegment !== 'sobre') {
        actualSegment = 'sobre';

        content.style.opacity = '0';
        setTimeout(() => {
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
        }, timeBetweenTransitions);
    }
}
function dados() {
    if(actualSegment !== 'dados') {
        actualSegment = 'dados';

        content.style.opacity = '0';
        setTimeout(() => {
            content.innerHTML = 
            '<div class="dados">' +
            '<img class="avatar-img" src="https://avatars.githubusercontent.com/u/79710675?v=4" alt="Profile Picture">' +
            '<div class="content">' +
                '<h1>Email: <a class="email" href="mailto:joaoerik2074@gmail.com">joaoerik2074@gmail.com</a></h1>' +
                '<h1>Telefone: +55 14 98808-8494</h1>' +
            '</div>' +
            '</div>';
            fadeInContent();
        }, timeBetweenTransitions);
    }
}
function projetos() {
    if(actualSegment !== 'projetos') {
        actualSegment = 'projetos';

        content.style.opacity = '0';
        setTimeout(() => {
            content.innerHTML = '<p>Trabalhando nisso...</p>';
            fadeInContent();
        }, timeBetweenTransitions);
    }
}
function tecnologias() {
    if(actualSegment !== 'tecnologias') {
        actualSegment = 'tecnologias';

        content.style.opacity = '0';
        setTimeout(() => {
            content.innerHTML = '<p>Trabalhando nisso...</p>';
            fadeInContent();
        }, timeBetweenTransitions);
    }
}

function fadeInContent() {
    content.style.opacity = '1';
}