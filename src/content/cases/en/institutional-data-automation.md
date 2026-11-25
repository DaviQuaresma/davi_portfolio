---
title: ProConsumidor Automation
order: 2
focus: Problem-solving & measurable impact
summary: An automation integrating ProConsumidor with an internal CRM, replacing a 2+ hour manual daily process with an unattended workflow that finishes in under 2 minutes.
metrics:
  - value: 98
    prefix: "−"
    suffix: "%"
    label: daily process time
  - value: 500
    prefix: "+"
    suffix: "h"
    label: of operational capacity freed per year
  - value: 2
    prefix: "<"
    suffix: " min"
    label: per run, down from over 2 hours
highlights:
  - ProConsumidor-to-CRM integration through headless browsing
  - Data processing and normalization before persistence
  - Excel report delivered automatically by email
  - Scheduled, unattended runs with failure handling and retries
stack: [Python, Playwright, Pandas, Tenacity]
diagram: automation
---

ProConsumidor data was entered into the CRM by hand every day, costing the team over 2 hours and prone to
human error. I automated the whole flow — collection, processing, CRM integration and Excel report delivery by
email — with scheduled runs and retries to cope with an unstable external source. The team now only handles
exceptions, and a planned additional hire was no longer needed.
