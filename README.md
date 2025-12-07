# Monitoramento de Compressores — Dashboard Web

Este projeto nasceu a partir de um **problema real enfrentado por uma empresa**, que precisava monitorar em tempo real diversos **parâmetros críticos de compressores industriais** através de uma aplicação web.

O sistema original consumia dados diretamente de uma **API interna da empresa**, mas para transformar este trabalho em um **projeto de portfólio seguro**, todos os dados sensíveis foram removidos e substituídos por **valores sintéticos e simulados**.

---

## 🚀 Objetivo do Projeto

Criar um **dashboard web interativo** capaz de:

* Visualizar dados operacionais de vários compressores
* Exibir pressões, temperaturas, tensões e consumo energético
* Acompanhar status e desempenho em tempo quase real
* Facilitar a identificação de anomalias ou quedas de performance

---

## 🧩 Tecnologias Utilizadas

* **React.js** — construção da interface
* **JavaScript ES6+** — manipulação de estados e dados
* **CSS
* **Mock API local** com dados JSON simulados

---

## 🏗 Estrutura dos Dados

Os dados simulados seguem o mesmo padrão estrutural dos dados reais da empresa, garantindo fidelidade no comportamento das telas.

Exemplo de registro:

```json
{
  "1": {
    "id_compressor": 1,
    "packageDischargePressure": 6.3,
    "sumpPress": 7.8,
    "inletVacuum": 0.04,
    "coolantFilterInPressure": 5.1,
    "coolantFilterOutPressure": 4.9,
    "afterCoolerDischargePressure": 5.7,
    "separatorPressure": 6.0,
    "coolantFilterPressureDrop": 0.2,
    "injectedCoolantTemp": 62,
    "airendTemp": 89,
    "afterCoolerDischargeTemp": 42,
    "inletTemp": 27,
    "coolerOutTemp": 31,
    "percentCapacity": 78,
    "motorSpeed": 4450,
    "motorCurrent": 86,
    "dcBusVoltage": 540,
    "motorVoltage": 387,
    "packageKW": 45.6,
    "kWh": 184,
    "inputVoltage": 398,
    "runningHours": 4231,
    "afterCoolerDischargePress": 23
  }
}
```

---

## 📊 Funcionalidades Implementadas

* Seleção individual de compressores
* Exibição dinâmica dos dados do equipamento selecionado
* Componentes visuais para facilitar leitura (cards, gauges, tabelas)
* Atualização simulada dos dados

---

## 🎯 Objetivo como Portfólio

O foco deste projeto é demonstrar:

* Organização de dados complexos
* Integração com APIs (na versão original, interna da empresa)
* Construção de interfaces limpas e funcionais
* Domínio com React, estados, renderização condicional e lógica de frontend

Esse projeto mostra a capacidade de **transformar um cenário industrial real** em uma solução completa para apresentação profissional.

---

## 📦 Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm start
```

3. Acesse:

```
http://localhost:3000
```

---

## 📘 Observações Importantes

* Nenhuma informação real da empresa foi utilizada.
* A API foi totalmente substituída por dados estáticos e simulados.
* A estrutura e o fluxo continuam fieis à aplicação real, preservando a relevância técnica do projeto.

---

## 📩 Contato

Caso queira sugestões de melhoria, expansão ou integração com backend real, posso ajudar!
