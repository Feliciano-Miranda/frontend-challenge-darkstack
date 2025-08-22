# 🎨 Desafio A - Frontend
## ⭐ Calculadora Simples

**Dificuldade:** Fácil

### 📝 Descrição
Crie uma calculadora simples e funcional que realize operações matemáticas básicas com interface intuitiva.

### 🎯 Funcionalidades Obrigatórias

**Interface:**
- Display para mostrar números e resultados
- Botões numéricos (0-9)
- Botões de operação (+, -, ×, ÷)
- Botão de igual (=)
- Botão de limpar (C)

**Operações:**
- Soma (+)
- Subtração (-)
- Multiplicação (×)
- Divisão (÷)

### 📋 Requisitos Técnicos

**Obrigatórios:**
- Interface responsiva para desktop e mobile
- Tratamento de erro para divisão por zero
- Operações devem ser executadas em sequência
- Display deve mostrar o número atual sendo digitado

**Extras (Opcional):**
- Histórico das últimas operações
- Botão de backspace/apagar último dígito
- Suporte a números decimais
- Operações avançadas (%, √, x²)
- Temas claro/escuro
- Animações nos botões

### 🎨 Layout Sugerido

```
┌─────────────────────┐
│     123.45          │ ← Display
├─────────────────────┤
│  C   ±   %    ÷     │
│  7   8   9    ×     │
│  4   5   6    -     │
│  1   2   3    +     │
│  0        .    =    │
└─────────────────────┘
```

### 💻 Especificações do Display
- Deve mostrar números conforme digitados
- Limitar a 10-12 dígitos visíveis
- Mostrar "Error" em caso de divisão por zero
- Formatar números grandes com notação científica se necessário

### 🎯 Comportamento Esperado

**Sequência de operações:**
1. Usuário digita "5"
2. Display mostra "5"
3. Usuário clica "+"
4. Usuário digita "3"
5. Display mostra "3"
6. Usuário clica "="
7. Display mostra "8"

**Operações em cadeia:**
- Permitir calcular 5 + 3 = 8 - 2 = 6 × 2 = 12

### 📱 Responsividade
- Botões devem ter tamanho adequado para toque em mobile
- Layout deve se adaptar a diferentes tamanhos de tela
- Mínimo de 44px de altura para botões (padrão de acessibilidade)

### ✅ Critérios de Avaliação

- **Funcionalidade:** Todas as operações funcionam corretamente?
- **Interface:** Design limpo e intuitivo?
- **Responsividade:** Funciona bem em desktop e mobile?
- **Tratamento de erros:** Lida adequadamente com casos especiais?
- **Qualidade do código:** Código bem estruturado?
- **UX:** Experiência do usuário fluida?

**Tecnologias sugeridas:** HTML5, CSS3, JavaScript vanilla, React, Vue.js, Angular, ou qualquer framework de sua preferência!

### 🎨 Inspiração de Design
- Calculadora do iOS/Android
- Calculadora do Windows
- Google Calculator
- Seja criativo com cores e estilo!