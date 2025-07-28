
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacaoSelect = document.getElementById('operacao-select');
const calcularBtn = document.getElementById('calcular-btn');
const resultadoCalculadora = document.getElementById('resultado-calculadora');


calcularBtn.addEventListener('click', function() {
   
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    const operacao = operacaoSelect.value;

    let resultado;
   
    if (isNaN(num1) || isNaN(num2)) {
        resultadoCalculadora.textContent = "Por favor, insira números válidos.";
        return;
    }


    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                resultadoCalculadora.textContent = "Não é possível dividir por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoCalculadora.textContent = "Operação inválida.";
            return;
    }

    resultadoCalculadora.textContent = `Resultado: ${resultado}`;
});
