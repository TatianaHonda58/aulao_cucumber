# aulao_cucumber

## 📝 Descrição
Este projeto contém a automação de testes End-to-End (E2E) para validação do fluxo de autenticação e funcionalidades da aplicação Web, utilizando **Cucumber.js** com a especificação Gherkin e **Selenium WebDriver**.

---

## 🛠️ Tecnologias Utilizadas
* **Cucumber.js**: Framework para automação de testes utilizando BDD (Behavior-Driven Development).
* **Selenium WebDriver**: Automação e interação com os elementos da interface do navegador.
* **JavaScript / Node.js**: Linguagem e ambiente de execução para os cenários e passos de teste.

---

## 🚀 Instalação e Configuração

### 1. Clonar o repositório
```bash
git clone [https://github.com/TatianaHonda58/aulao_cucumber.git](https://github.com/TatianaHonda58/aulao_cucumber.git)
cd aulao_cucumber
```

### 2. Instalar as dependências
```bash
npm install
```

🧪 Execução dos Testes
Antes de iniciar os testes, garanta que a aplicação web (banco-web) e a API REST (banco-api) estejam rodando nas portas configuradas.

- **banco-web**: http://localhost:4000
- **banco-api**: http://localhost:3000

Para rodar todos os cenários automatizados:
```bash
npx cucumber-js
```

📁 Estrutura do Projeto
```Plaintext
aulao_cucumber/
├── features/
│   ├── login.feature               # Especificação dos cenários em Gherkin
│   └── step_definitions/
│       └── loginSteps.js           # Implementação dos passos com Selenium
├── cucumber.js                     # Configurações do Cucumber
├── package.json                    # Dependências do projeto
└── README.md                       # Documentação do repositório
```


