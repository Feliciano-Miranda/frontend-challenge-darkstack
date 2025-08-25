# Starter Code para o Desafio da Calculadora com React

Olá! Este guia irá te ajudar a configurar o ambiente e começar o desafio da calculadora usando React.

## 🚀 Como Começar

### Passo 1: Crie seu Projeto React com Vite

**Vite** é a ferramenta moderna e super rápida para criar projetos web. Abra seu terminal, navegue até a pasta onde você guarda seus projetos e rode o seguinte comando:

```bash
npm create vite@latest calculadora-react -- --template react
```

Depois que o comando terminar, entre na nova pasta e instale as dependências:
```bash
cd calculadora-react
npm install
```

### Passo 2: Substitua os Arquivos Iniciais

Agora que seu projeto está criado, vamos substituir o código de exemplo pelo nosso esqueleto da calculadora.

**1. Substitua o conteúdo do arquivo `src/App.jsx` por este código:**

```jsx
import { useState } from 'react';
import './App.css';

function App() {
  // --- COMPLETE A LÓGICA A PARTIR DAQUI ---

  // TODO: Crie os estados necessários para a calculadora usando o hook useState.
  const [currentOperand, setCurrentOperand] = useState('0');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(null);

  // TODO: Implemente as funções da calculadora.
  function appendNumber(number) { /* ... Lógica aqui ... */ }
  function chooseOperation(op) { /* ... Lógica aqui ... */ }
  function compute() { /* ... Lógica aqui ... */ }
  function clear() { /* ... Lógica aqui ... */ }
  function deleteLastDigit() { /* ... Lógica aqui ... */ }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      
      {/* --------------------------------------------------------------------------
        TODO: COMPLETE A ESTRUTURA DOS BOTÕES DA CALCULADORA AQUI.

        - Use a tag <button>.
        - Adicione o evento `onClick` em cada um para chamar a função correta.
        - Lembre-se dos botões que ocupam duas colunas (classe "span-two").
        - Siga o layout sugerido no desafio para a ordem dos botões.
        --------------------------------------------------------------------------
      */}

      {/* Exemplo de botão: */}
      <button onClick={clear} className="span-two">C</button>
      
      {/* ... Adicione o restante dos botões aqui ... */}

    </div>
  );
}

export default App;
```

**2. Substitua o conteúdo do arquivo `src/App.css` por este código:**

```css
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: linear-gradient(to right, #00AAFF, #00FF6C);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.calculator-grid {
  display: grid;
  /* Estas são as definições de layout do grid. Essenciais para a estrutura. */
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
}

.span-two {
  grid-column: span 2;
}

/*
  --------------------------------------------------------------------------
  TODO: COMPLETE O ESTILO DA CALCULADORA A PARTIR DESTE PONTO.

  Você precisa estilizar:
    - A aparência geral dos botões (`.calculator-grid > button`)
    - O efeito hover dos botões (`.calculator-grid > button:hover`)
    - A área do display (`.output`)
    - O texto do operando anterior (`.previous-operand`)
    - O texto do operando atual (`.current-operand`)
  
  Sinta-se livre para ser criativo com cores, fontes e bordas!
  --------------------------------------------------------------------------
*/
```

### Passo 3: Rode o Projeto

Volte para o seu terminal (que deve estar na pasta `calculadora-react`) e rode o comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o navegador no endereço que o terminal indicar (geralmente `http://localhost:5173/`). Você verá uma estrutura bem básica, pronta para que você construa o restante da interface e implemente a lógica no arquivo `src/App.jsx`.

**Bom desafio!**