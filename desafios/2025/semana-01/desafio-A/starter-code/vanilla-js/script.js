// Seleciona todos os botões e o display
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// --- O participante implementa a partir daqui ---

// TODO: Crie uma classe ou objeto Calculator para gerenciar o estado
// - currentOperand
// - previousOperand
// - operation

// TODO: Adicione os event listeners para os botões
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Lógica para adicionar número ao operando atual
    // Atualizar o display
  });
});

// ... adicione listeners para os outros botões (operadores, igual, limpar)

// Funções que o participante precisará criar:
// - clear() -> Limpa o display e as variáveis de estado
// - delete() -> Apaga o último dígito
// - appendNumber(number) -> Adiciona um número ao operando atual
// - chooseOperation(operation) -> Salva a operação escolhida
// - compute() -> Executa o cálculo
// - updateDisplay() -> Atualiza o que é mostrado no display