---
title: ProConsumidor Automation
order: 2
focus: Resolução de problemas & impacto mensurável
summary: Automação que integra o ProConsumidor a um CRM interno, substituindo um processo manual diário de mais de 2 horas por um fluxo autônomo de menos de 2 minutos.
metrics:
  - value: 98
    prefix: "−"
    suffix: "%"
    label: no tempo do processo diário
  - value: 500
    prefix: "+"
    suffix: "h"
    label: de capacidade operacional liberadas por ano
  - value: 2
    prefix: "<"
    suffix: " min"
    label: por execução, antes mais de 2 horas
highlights:
  - Integração do ProConsumidor com o CRM interno via navegação headless
  - Processamento e normalização dos dados antes da persistência
  - Relatório em Excel enviado automaticamente por e-mail
  - Execução agendada e autônoma, com tratamento de falhas e retentativas
stack: [Python, Playwright, Pandas, Tenacity, PostgreSQL]
diagram: automation
---

O lançamento dos dados do ProConsumidor no CRM era feito à mão todos os dias, consumindo mais de 2 horas do
setor e sujeito a erro humano. Automatizei o fluxo completo — coleta, tratamento, integração com o CRM e envio do
relatório em Excel por e-mail — com execução agendada e retentativas para lidar com instabilidades da fonte externa.
A equipe passou a atuar só nas exceções, e a contratação adicional que estava planejada deixou de ser necessária.
