
const inputItem = document.getElementById('novo-item-input');
const botaoAdicionar = document.getElementById('adicionar-btn');
const lista = document.getElementById('minha-lista');

botaoAdicionar.addEventListener('click', function() {
    const itemTexto = inputItem.value.trim();  

    if (itemTexto !== '') {
        const novoItemLi = document.createElement('li');
        novoItemLi.textContent = itemTexto;
        lista.appendChild(novoItemLi);
        inputItem.value = '';
    } else {
        alert('Por favor, digite um item.');
    }
});
