---
title: Financial ERP API
order: 1
focus: Backend architecture & system design
summary: A financial ERP running in controlled production, with complex business rules and end-to-end asynchronous processing.
metrics:
  - value: 30
    suffix: "+"
    label: functional capabilities
highlights:
  - Recurring transactions, cost allocation, cost centers and budgets
  - Isolated queues for heavy processing without blocking the API
  - PDF and Excel reports and exports
  - End-to-end technical ownership, from domain model to deploy
stack: [PHP, Laravel, MySQL, Docker]
diagram: erp
---

Financial control relied on manual processes and scattered rules. The challenge was modeling a financial domain
with recurrences, allocation across cost centers and budgets, keeping data consistent and the API responsive even
while heavy reports were being generated.
