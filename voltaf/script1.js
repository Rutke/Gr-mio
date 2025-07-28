

const inputNome = document.getElementById('input-nome');
const mensagemErro = document.getElementById('mensagem-erro');
const botaoValidar = document.getElementById('validar-btn');

botaoValidar.addEventListener('click', function() {
   
    if (inputNome.value.trim() === '') {
        mensagemErro.textContent = 'Por favor, digite seu nome.';
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.textContent = '';
        mensagemErro.style.display = 'none';
    }
});
