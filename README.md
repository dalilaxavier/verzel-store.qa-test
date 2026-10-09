# Teste Técnico QA — Verzel Store

Projeto desenvolvido como parte de um teste técnico de QA Júnior na Verzel.

---

## Funcionalidade testada

- Cupom de desconto e frete grátis. 

# Estratégia de testes

A estratégia foi dividida em três frentes:

1. Testes manuais

Foram elaborados cenários de teste em Gherkin, contemplando os critérios de aceite da funcionalidade e as regras de negócio.

Também foram realizados testes de regressão e testes exploratórios para investigar comportamentos não descritos explicitamente na documentação.

2. Testes de API

A API foi testada utilizando Postman, validando:

- Status HTTP;
- Estrutura das respostas;
- Dados retornados;
- Regras de negócio;
- Cálculos;
- Tratamento de erros;
- Cupons válidos, inválidos e expirados;
- Limite de quantidade por produto;
- Validações do cadastro do pedido.

3. Testes automatizados

Foram selecionados 3 cenários para automação utilizando Playwright.

---

# Tecnologias e ferramentas

| Tecnologia / Ferramenta | Utilização                          |
| ----------------------- | ----------------------------------- |
| **Playwright**          | Automação de testes                 |
| **JavaScript**          | Linguagem utilizada na automação    |
| **Postman**             | Testes de API                       |
| **Gherkin**             | Especificação dos cenários de teste |
| **Git / GitHub**        | Versionamento e documentação        |
| **Chrome**              | Execução dos testes manuais         |
| **Windows 10**          | Ambiente dos testes manuais         |
| **ChatGPT**             | Apoio na análise e estruturação dos cenários de teste, contribuindo para agilizar o processo |

---

# Estrutura do projeto

```text
teste-tecnico-verzel/
│
├── teste-manual/
│   ├── docs/
│   │   ├── 01.cenarios-de-teste.md
│   │   ├── 02.execucao-testes.md
│   │   ├── 03.testes-exploratorios.md
│   │   ├── 04.report-de-bugs.md
│   │   └── 05.matriz-de-rastreabilidade.md
│   │
│   ├── evidencia-bugs/
│   └── evidencias-testes/
│
├── teste-api/
│   ├── collection/
│   │   ├── verzel-store.postman_collection.json
│   │   └── verzel-teste.postman_environment.json
│   │
│   ├── evidencias-bug/
│   ├── evidencias-de-testes/
│   ├── api-bugs.md
│   └── api-resultado-testes.md
│
├── teste-automacao/
│   ├── tests/
│   │   └── cenarios.spec.js
│   ├── playwright.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

## Como executar os testes de API

### Via Postman

- Abra o Postman
- Importe os dois arquivos da pasta teste-api/collection/
    - verzel-teste.postman_collection.json
    - verzel-teste.postman_environment.json
- Selecione o environment verzel-teste
- Execute as requisições

Os resultados da execução estão disponíveis em:

- teste-api/api-resultado-testes.md

Os bugs encontrados nos testes de API estão documentados em:

- teste-api/api-bugs.md

As evidências estão organizadas em:

- teste-api/evidencias-de-testes/
- teste-api/evidencias-bug/

# Automação com Playwright

Foram selecionados cenários funcionais para automação utilizando **Playwright + JavaScript**.

**Pré-requisitos:**

* Node.js instalado;
* npm disponível no terminal.

Verifique:

```bash
node --version
npm --version
```

**Instalação**

Entre na pasta da automação:

```bash
cd teste-automacao
```

Instale as dependências:

```bash
npm install
```

Caso os navegadores do Playwright ainda não estejam instalados:

```bash
npx playwright install
```

---

**Executar os testes automatizados:**

Para executar todos os testes:

```bash
npx playwright test
```

Para executar os testes com o navegador visível:

```bash
npx playwright test --headed
```

Para executar um arquivo específico:

```bash
npx playwright test tests/cenarios.spec.js
```

---

**Visualizar o relatório**

Após a execução:

```bash
npx playwright show-report
```

O Playwright abrirá o relatório HTML com os resultados dos testes.

---

# Observações

Durante a análise dos requisitos e a execução dos testes, foram identificados alguns pontos que não estão completamente especificados na documentação fornecida. Essas observações foram consideradas durante o planejamento e a execução dos testes.

### CA05 — Aplicação de apenas um cupom por vez

A documentação determina que apenas um cupom pode ser aplicado por vez e que, para trocar de cupom, o cupom atual deve ser removido. Entretanto, foi fornecido apenas um cupom válido para teste.

**Impacto nos testes:** não foi possível validar completamente a troca entre dois cupons válidos.

### CA06 — Frete grátis

O requisito define frete grátis para subtotal maior ou igual a R$ 200,00. Entretanto, não foi identificada uma combinação de produtos, considerando os preços e limites de quantidade fornecidos, que permita testar exatamente todos os valores de fronteira relevantes.

**Impacto nos testes:** a cobertura da regra de fronteira foi realizada utilizando os valores executáveis disponíveis na massa de dados.

### CA10 — Limite de 5 unidades por produto

O requisito informa que o limite de 5 unidades deve ser aplicado tanto na interface quanto na API, mas não detalha o comportamento esperado da interface ao tentar adicionar uma 6ª unidade, como a exibição de uma mensagem, o bloqueio da ação ou outra forma de feedback.

**Impacto nos testes:** foi validado o bloqueio da 6ª unidade na interface, sem assumir uma mensagem específica como requisito.

### Checkout — Validações preexistentes

As regras preexistentes definem algumas condições para nome, e-mail e CEP, mas não especificam todas as mensagens ou comportamentos esperados para entradas inválidas e cenários negativos.

**Impacto nos testes:** os comportamentos não especificados foram investigados durante os testes exploratórios, sem tratá-los automaticamente como defeitos quando não havia um comportamento esperado definido.

# Informações adicionais

Os principais artefatos do projeto estão organizados nas respectivas pastas:

- Testes manuais: teste-manual/
- Testes de API: teste-api/
- Automação: teste-automacao/
- Evidências: organizadas dentro das respectivas áreas de teste
- Bugs: disponíveis nas respectivas pastas dos testes
