# Guia de Contribuição (Front-End)

Olá! Ficamos felizes com seu interesse em contribuir com os Desafios de Front-End da **Comunidade Dark Stack**. Seguir estas diretrizes ajuda a manter a organização e a qualidade do nosso repositório.

## 📜 Código de Conduta

Antes de contribuir, por favor, leia nossos **[Termos de Participação e Código de Conduta](https://drive.google.com/file/d/1OKUiAjwn0XRe4h6kJannBm1j4uejQb-O/view?usp=sharing)**. Esperamos que todos os participantes sigam estas regras para garantir que nossa comunidade seja um ambiente acolhedor e respeitoso para todos.

##  submitting_solutions Submetendo Soluções (Desafios Semanais)

Todas as soluções para os desafios semanais devem ser submetidas através de **Pull Requests**.

### Fluxo de Trabalho Detalhado

1.  **Fork o Repositório:** Crie uma cópia deste repositório na sua própria conta do GitHub.

2.  **Clone o seu Fork:** Baixe a sua cópia para sua máquina local.
    ```bash
    git clone [https://github.com/](https://github.com/)[SEU-USUARIO]/frontend-challenge-dark-stack.git
    ```

3.  **Crie uma Branch:** Crie uma branch específica para a sua solução.
    ```bash
    # Padrão da branch: solucao/semana-XX/desafio-X/seu-usuario
    git checkout -b solucao/semana-01/desafio-A/fulano-silva
    ```

4.  **Desenvolva sua Solução:**

    * **Padrão de Estrutura de Pastas (Obrigatório):** Crie a estrutura de pastas para sua solução dentro do diretório `/solucoes`.
        ```
        /solucoes/[ano]/[semana-XX]/[desafio-X]/[seu-usuario]/
        ```
        **Exemplo:** `/solucoes/2025/semana-01/desafio-A/fulano-silva/`

    * **Padrão de Nomenclatura de Arquivos:** Para desafios de front-end, é comum ter múltiplos arquivos. Mantenha todos (`index.html`, `style.css`, `script.js`, etc.) dentro da sua pasta `/[seu-usuario]/`. Adicione um `README.md` se quiser explicar sua abordagem.

5.  **Faça o Commit das suas Alterações:**
    * Siga o padrão de **Commits Convencionais**.
    * **Exemplo:** `git commit -m "feat: Adiciona solução para o desafio A da semana 01"`

6.  **Push para o seu Fork:** Envie sua branch com os commits para o seu repositório remoto.
    ```bash
    git push origin solucao/semana-01/desafio-A/fulano-silva
    ```

7.  **Abra um Pull Request:**
    * Use um título claro e padronizado.
    * **Padrão:** `Solução Desafio [X] (Semana XX) - [Seu Usuário]`

## 🏗️ Submetendo o Protocolo Dark (Projetos Mensais)

O processo para os projetos mensais (Protocolo Dark) é **diferente**.
* Você deve criar um **repositório público novo e separado** na sua própria conta do GitHub para o projeto.
* A "entrega" do seu **Protocolo Dark** consiste em abrir um Pull Request neste repositório para adicionar o link do seu projeto ao nosso **"Codex dos Projetos"** (arquivo `O_CODEX_DOS_PROJETOS.md`).