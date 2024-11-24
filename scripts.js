// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de Apresentação carregada');
    // Manipulação de alguma ação com JavaScript
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de Galeria carregada');
    // Exemplo de interação: exibir alerta ao clicar em uma imagem
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Você clicou em um card!');
        });
    });
});

document.querySelector('form').addEventListener('submit', (event) => {
    const nome = document.getElementById('nome').value;
    if (nome.length < 3) {
        event.preventDefault();
        alert('O nome precisa ter pelo menos 3 caracteres.');
    }
}); //fazer alerta no <p aviso>

// muda cor dos links no header, alterar para apenas os <a>
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', () => {
    nav.style.backgroundColor = 'rgba(0,0,0,0.8)';
});
nav.addEventListener('mouseout', () => {
    nav.style.backgroundColor = '#333';
});
