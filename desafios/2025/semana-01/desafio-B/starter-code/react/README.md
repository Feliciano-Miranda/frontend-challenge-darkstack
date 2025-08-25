# Starter Code para o Desafio da Lista de Tarefas com React

Olá! Este guia irá te ajudar a configurar o ambiente e começar o desafio da "Todo List" usando React. O foco aqui será na componentização e no gerenciamento de estado.

## 🚀 Como Começar

### Passo 1: Crie seu Projeto React com Vite

Abra seu terminal e rode o comando abaixo para criar um novo projeto React.

```bash
npm create vite@latest lista-de-tarefas-react -- --template react
```

Depois, entre na pasta e instale as dependências:

```bash
cd lista-de-tarefas-react
npm install
```

### Passo 2: Substitua os Arquivos Iniciais

Agora, substitua o conteúdo dos arquivos de exemplo pelo nosso esqueleto do desafio.

#### 1. Substitua o conteúdo do arquivo `src/App.jsx` por este código:

```javascript
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // --- COMPLETE A LÓGICA A PARTIR DAQUI ---

  // TODO: Crie os estados necessários:
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('todas');
  
  // TODO: Implemente as funções da aplicação

  function handleAddTask(event) {
    // Lógica para adicionar uma nova tarefa
  }

  function handleToggleTask(taskId) {
    // Lógica para marcar/desmarcar uma tarefa como concluída
  }

  function handleDeleteTask(taskId) {
    // Lógica para remover uma tarefa
  }

  // TODO: Crie uma variável para as tarefas filtradas
  const filteredTasks = tasks; // Lógica de filtragem aqui...

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 Minha Lista de Tarefas</h1>
      </header>
      
      <form className="add-task-form" onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="O que precisa ser feito?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="filters-container">
        {/* TODO: COMPLETE A ESTRUTURA DOS BOTÕES DE FILTRO E DO CONTADOR.
          - Crie os botões para filtrar por "Todas", "Pendentes" e "Concluídas".
          - O onClick de cada botão deve atualizar o estado do `filter`.
        */}
      </div>
      
      <main className="task-list">
        {/* TODO: COMPLETE A RENDERIZAÇÃO DA LISTA DE TAREFAS AQUI.
          - Use a função `map` na sua lista de tarefas filtradas (filteredTasks).
          - Para cada tarefa, renderize um elemento que mostre o texto da tarefa 
            e os botões de ação (concluir, remover).
        */}
      </main>

      <footer className="app-footer">
        {/* TODO: Adicione o botão "Limpar Concluídas" */}
      </footer>
    </div>
  );
}

export default App;
```

#### 2. Substitua o conteúdo do arquivo `src/App.css` por este código:

```css
:root {
  --primary-color: #3b82f6;
  --background-color: #f3f4f6;
  --text-color: #1f2937;
  --container-bg: #ffffff;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 2rem;
}

.app-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--container-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  color: var(--primary-color);
  text-align: center;
}

/* --------------------------------------------------------------------------
  TODO: COMPLETE O ESTILO DA APLICAÇÃO A PARTIR DESTE PONTO.

  Você precisa estilizar:
    - O formulário (`.add-task-form`)
    - Os botões e inputs
    - A área de filtros (`.filters-container`)
    - A lista de tarefas (`.task-list`) e seus itens.
    - O rodapé (`.app-footer`)
  --------------------------------------------------------------------------
*/
```

### Passo 3: Rode o Projeto

Volte para o seu terminal e rode o comando para iniciar o servidor:

```bash
npm run dev
```

Abra o navegador no endereço indicado. Você verá uma estrutura básica, pronta para que você complete a interface e implemente a lógica no arquivo `src/App.jsx`.

**Bom desafio!**