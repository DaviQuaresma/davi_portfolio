---
title: Institutional Data Automation
order: 2
focus: Resolução de problemas & impacto mensurável
summary: Automação da coleta e do processamento de dados institucionais, executada de forma agendada e resiliente a falhas.
metrics:
  - value: 83.67
    prefix: "−"
    suffix: "%"
    decimals: 2
    label: no tempo de execução, medido pelo setor
highlights:
  - Coleta automatizada com navegação headless
  - Processamento e normalização dos dados antes da persistência
  - Execução agendada em servidor
  - Tentativas de recuperação e tratamento de falhas
stack: [Python, Playwright, Pandas, Tenacity, PostgreSQL]
diagram: automation
---

A coleta de dados institucionais era feita manualmente, consumindo horas do setor e sujeita a erro humano.
Automatizei o fluxo completo — coleta, tratamento e armazenamento — com execução agendada e retentativas para
lidar com instabilidades das fontes externas.
