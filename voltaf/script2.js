
const cartaoDestaque = document.getElementById('cartao-destaque');

cartaoDestaque.addEventListener('mouseover', function() {
    cartaoDestaque.classList.add('destacado');
});

cartaoDestaque.addEventListener('mouseout', function() {
  
    cartaoDestaque.classList.remove('destacado');
});
