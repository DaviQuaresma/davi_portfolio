---
title: Financial ERP API
order: 1
focus: Arquitetura backend & system design
summary: ERP financeiro em produção controlada, com regras de negócio complexas e processamento assíncrono de ponta a ponta.
metrics:
  - value: 30
    suffix: "+"
    label: capacidades funcionais
highlights:
  - Recorrências financeiras, rateios, centros de custo e orçamentos
  - Filas isoladas para processamento pesado sem travar a API
  - Relatórios e exportações em PDF e Excel
  - Responsabilidade técnica de ponta a ponta, do domínio ao deploy
stack: [PHP, Laravel, MySQL, Docker]
diagram: erp
---

O controle financeiro dependia de processos manuais e de regras espalhadas. O desafio foi modelar um domínio
financeiro com recorrências, rateios entre centros de custo e orçamentos, garantindo consistência dos dados e
mantendo a API responsiva mesmo durante gerações de relatórios pesados.
