---
title: Institutional Data Automation
order: 2
focus: Problem-solving & measurable impact
summary: Automated collection and processing of institutional data, running on a schedule and resilient to failures.
metrics:
  - value: 83.67
    prefix: "−"
    suffix: "%"
    decimals: 2
    label: execution time, as measured by the team
highlights:
  - Automated collection through headless browsing
  - Data processing and normalization before persistence
  - Scheduled server-side execution
  - Retry strategies and failure handling
stack: [Python, Playwright, Pandas, Tenacity, PostgreSQL]
diagram: automation
---

Institutional data was collected by hand, costing the team hours and prone to human error. I automated the whole
flow — collection, processing and storage — with scheduled runs and retries to cope with unstable external sources.
