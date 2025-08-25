// Seleciona os elementos principais do DOM
const taskForm = document.getElementById('addTaskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const filtersContainer = document.getElementById('filtersContainer');
const appFooter = document.getElementById('appFooter');

// --- O participante implementa a partir daqui ---

// TODO: Crie um array para armazenar as tarefas.
// Exemplo: let tasks = [];
// Dica: Tente carregar as tarefas do localStorage ao iniciar.

// TODO: Crie uma variável para armazenar o filtro atual.
// Exemplo: let currentFilter = 'todas';

// TODO: Crie uma função para renderizar as tarefas na tela.
function renderTasks() {
  // 1. Limpe a lista de tarefas atual (taskList.innerHTML = '')
  // 2. Filtre as tarefas com base no `currentFilter`.
  // 3. Para cada tarefa filtrada, crie um elemento <li>.
  // 4. Adicione o conteúdo ao <li> (checkbox, texto, botão de remover).
  // 5. Adicione os event listeners necessários para o checkbox e o botão de remover.
  // 6. Adicione a classe 'completed' ao <li> se a tarefa estiver concluída.
  // 7. Adicione o <li> à lista `taskList`.
  // 8. Atualize o contador de tarefas no rodapé.
}

// TODO: Adicione um event listener para o formulário (taskForm).
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o recarregamento da página
  
  // Lógica para adicionar a nova tarefa ao array 'tasks'.
  // Não se esqueça de limpar o input e de chamar renderTasks().
  // Dica: Salve as tarefas no localStorage após adicionar.
});

// TODO: Adicione um event listener para os filtros (use delegação de eventos).
filtersContainer.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    // Lógica para atualizar o `currentFilter` e chamar `renderTasks()`.
  }
});

// TODO: Adicione um event listener para a lista de tarefas (taskList)
// para lidar com os cliques nos checkboxes e botões de remover.

// --- Funções Auxiliares que você pode precisar ---
// - uma função para salvar as tarefas no localStorage.
// - uma função para carregar as tarefas do localStorage.
// - uma função para gerar IDs únicos para as tarefas.

// Exemplo de chamada inicial para renderizar as tarefas ao carregar a página
renderTasks();