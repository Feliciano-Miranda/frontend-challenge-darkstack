# 🎨 Desafio B - Frontend
## ⭐⭐ Lista de Tarefas com Filtros

**Dificuldade:** Mediano

### 📝 Descrição
Desenvolva uma aplicação completa de gerenciamento de tarefas (Todo List) com funcionalidades avançadas de filtragem, edição e persistência.

### 🎯 Funcionalidades Obrigatórias

**Gerenciamento de Tarefas:**
- Adicionar nova tarefa
- Marcar/desmarcar tarefa como concluída
- Editar texto de tarefa existente
- Remover tarefa individual
- Contador de tarefas pendentes

**Sistema de Filtros:**
- Mostrar todas as tarefas
- Filtrar apenas pendentes
- Filtrar apenas concluídas
- Limpar todas as tarefas concluídas

### ⭐ Funcionalidades Extras (Opcional)

**Priorização:**
- Definir prioridade (Alta, Média, Baixa)
- Ordenar por prioridade
- Indicadores visuais de prioridade

**Organização:**
- Data de vencimento
- Categorias/tags
- Arrastar e soltar para reordenar
- Busca por texto

**Dados:**
- Persistir no localStorage
- Exportar/importar tarefas (JSON)
- Estatísticas (total, concluídas, pendentes)

### 📊 Estrutura de Dados
```javascript
{
  id: 1,
  texto: "Estudar JavaScript",
  concluida: false,
  prioridade: "alta", // "alta", "media", "baixa"
  categoria: "estudos",
  dataVencimento: "2024-12-31",
  criadaEm: "2024-12-20T10:00:00Z",
  editadaEm: "2024-12-20T11:00:00Z"
}
```

### 🎨 Layout Sugerido

```
┌─────────────────────────────────────┐
│ 📝 Minha Lista de Tarefas           │
├─────────────────────────────────────┤
│ [Nova tarefa...        ] [Adicionar]│
├─────────────────────────────────────┤
│ [Todas] [Pendentes] [Concluídas]    │
│ Pendentes: 3 | Concluídas: 5        │
├─────────────────────────────────────┤
│ ☐ Estudar React (Alta) [Editar] [×] │
│ ☑ Fazer compras (Baixa) [Editar][×] │
│ ☐ Exercitar-se (Média) [Editar] [×] │
├─────────────────────────────────────┤
│ [Limpar Concluídas] [Exportar]      │
└─────────────────────────────────────┘
```

### 💻 Especificações Técnicas

**Interface:**
- Design responsivo (mobile-first)
- Animações suaves para interações
- Estados visuais claros (hover, active, disabled)
- Feedback visual para ações do usuário

**Formulários:**
- Validação em tempo real
- Mensagens de erro claras
- Tecla Enter para adicionar tarefa
- Escape para cancelar edição

**Performance:**
- Renderização otimizada para muitas tarefas
- Lazy loading se necessário
- Debounce na busca

### 🎯 Comportamentos Esperados

**Adicionar Tarefa:**
1. Usuário digita texto no input
2. Pressiona Enter ou clica "Adicionar"
3. Tarefa aparece na lista
4. Input é limpo
5. Contador é atualizado

**Editar Tarefa:**
1. Usuário clica no botão "Editar" ou duplo-clique no texto
2. Texto vira input editável
3. Usuário modifica e pressiona Enter
4. Texto é salvo e sai do modo edição
5. ESC cancela a edição

**Filtros:**
- Filtros devem ser mutuamente exclusivos
- Estado do filtro deve ser visualmente indicado
- Contador deve refletir apenas tarefas visíveis

### 📱 Responsividade

**Mobile (< 768px):**
- Layout em coluna única
- Botões com tamanho touch-friendly
- Menu de filtros colapsável
- Swipe para ações rápidas (opcional)

**Tablet (768px - 1024px):**
- Layout otimizado para toque
- Sidebar com filtros (opcional)

**Desktop (> 1024px):**
- Layout em duas colunas (opcional)
- Atalhos de teclado
- Hover effects

### 🎨 Design System

**Cores sugeridas:**
- Primária: #3b82f6 (azul)
- Sucesso: #10b981 (verde)
- Alerta: #f59e0b (amarelo)
- Erro: #ef4444 (vermelho)
- Neutro: #6b7280 (cinza)

**Prioridades:**
- Alta: vermelho/laranja
- Média: amarelo/azul
- Baixa: verde/cinza

### ✅ Critérios de Avaliação

- **Funcionalidade:** Todas as features obrigatórias funcionam?
- **UX/UI:** Interface intuitiva e agradável?
- **Responsividade:** Funciona bem em todos os dispositivos?
- **Performance:** App roda suavemente mesmo com muitas tarefas?
- **Código:** Bem estruturado e componentizado?
- **Persistência:** Dados são salvos corretamente?
- **Acessibilidade:** Navegação por teclado e screen readers?

**Tecnologias sugeridas:** React, Vue.js, Angular, Svelte, ou JavaScript vanilla com framework CSS (Tailwind, Bootstrap, etc.)

### 🌟 Inspiração
- Todoist
- Microsoft To-Do
- Google Tasks
- Any.do
- Trello (versão simplificada)