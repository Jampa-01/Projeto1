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





                                                           // muda cor dos links no header, alterar para apenas os <a>
// Selecionando todos os<a> dentro do <header>
const link = document.querySelectorAll('header a');
// Adicionando os eventos de mouseover e mouseout para cada link
link.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(0,0,0,0.8)';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '#333';
    });
});




                                              // treço abaixo estava dando conflito para carregar função com os links

document.querySelector('form').addEventListener('submit', (event) => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const data = document.getElementById('data').value;
    if (nome.length < 3 || !email || cpf.length < 11 || !data) {
        event.preventDefault();
        alert('Verifique se nome tem pelo menos 3 caracteres.');
        //fazer alerta no <p aviso>
    }
});







//////////////////////////////////////////////////////TESTES

  // VALIDAÇÃO DOS INPUTSDE CADASTRO
//   document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const btnSubmit = form.querySelector('button');
   
//     // Função de validação
//     form.addEventListener('submit', (event) => {
//         // Limpando mensagens de erro anteriores
//         document.getElementById('aviso-nome').textContent = '';
//         document.getElementById('aviso-email').textContent = '';
//         document.getElementById('aviso-cpf').textContent = '';
//         document.getElementById('aviso-data').textContent = '';
                
//         let valid = true; // variável para controlar se todas as condições são atendidas
        
//         // Validação do nome (mínimo de 3 caracteres)
//         const nome = document.getElementById('nome').value;
//         if (nome.length < 3) {
//             document.getElementById('aviso-nome').textContent = 'O nome precisa ter pelo menos 3 caracteres.';
//             document.getElementById('aviso-nome').style.color = 'red';
//             valid = false;
//            }
          
//            // Validação do e-mail (não pode estar vazio)
//         const email = document.getElementById('email').value;
//         if (!email) {
//             document.getElementById('aviso-email').textContent = 'O e-mail é obrigatório.';
//             document.getElementById('aviso-email').style.color = 'red';
//             valid = false;
//            }
                                                                                   
//            // Validação do CPF (mínimo de 11 caracteres)
//        const cpf = document.getElementById('cpf').value;
//        if (cpf.length < 11) {
//             document.getElementById('aviso-cpf').textContent = 'O CPF precisa ter pelo menos 11 caracteres.';
//             document.getElementById('aviso-cpf').style.color = 'red';
//             valid = false;
//            }
   
//            // Validação da data de nascimento (não pode estar vazio)
//        const data = document.getElementById('data').value;
//        if (!data) {
//             document.getElementById('aviso-data').textContent = 'A data de nascimento é obrigatória.';
//             document.getElementById('aviso-data').style.color = 'red';
//             valid = false;
//            }
           
//            // Se alguma validação falhar, impede a submissão do formulário
//        if (!valid) {
//             event.preventDefault();
//             btnSubmit.disabled = true; // Desabilita o botão de submit
//            } else {
//             btnSubmit.disabled = false; // Habilita o botão de submit
//            }
//            });
                                                                                   
//            // Função para reabilitar o botão de submit quando os campos forem corrigidos
//            document.querySelectorAll('input, textarea').forEach(input => {
//                input.addEventListener('input', () => {
//                    const nome = document.getElementById('nome').value;
//                    const email = document.getElementById('email').value;
//                    const cpf = document.getElementById('cpf').value;
//                    const data = document.getElementById('data').value;
                                                                                   
//                    // Verificando se todos os campos estão válidos para reabilitar o botão
//                    if (nome.length >= 3 && email && cpf.length >= 11 && data) {
//                        btnSubmit.disabled = false;
//                    } else {
//                        btnSubmit.disabled = true;
//                    }
//                });
//            });
//        });
