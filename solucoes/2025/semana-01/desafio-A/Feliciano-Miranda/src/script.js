const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
let currentInput = "0";
let resetNext = false;

function toggletema() {
  const body = document.body;
  const btn = document.querySelector(".toggle-tema");
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    btn.textContent = "☀️";
  } else {
    body.classList.replace("dark", "light");
    btn.textContent = "🌙";
  }
}

function updateDisplay() {
  display.innerText =
    currentInput.length > 12
      ? parseFloat(currentInput).toExponential(6)
      : currentInput;
}

function appendNumber(num) {
  if (resetNext) {
    currentInput = num;
    resetNext = false;
  } else {
    currentInput = currentInput === "0" ? num : currentInput + num;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (/[-+*/%]$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  resetNext = false;
  updateDisplay();
}
function appendDecimal() {
  if (resetNext) {
    currentInput = "0.";
    resetNext = false;
  } else if (
    !currentInput.endsWith(".") &&
    !/\\d+\\.\\d*$/.test(currentInput)
  ) {
    currentInput += ".";
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  resetNext = false;
  updateDisplay();
}
function backspace() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  updateDisplay();
}
function calculoResult() {
  try {
    const result = Function(`return ${currentInput}`)();
    if (result === Infinity || result === -Infinity || isNaN(result)) {
      currentInput = "Error";
    } else {
      // Salvar histórico
      addToHistory(currentInput + " = " + result);
      currentInput = result.toString();
    }
  } catch {
    currentInput = "Error";
  }
  resetNext = true;
  updateDisplay();
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li); // Adiciona no topo
}

updateDisplay();
