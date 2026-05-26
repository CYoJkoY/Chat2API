---
name: chat2api-har-tool-fixture
description: Use when converting OpenAI-compatible client HAR files into sanitized replayable Chat2API tool-calling fixtures.
---

# Chat2API HAR Tool Fixture

Use this skill when a recorded client HAR should become reusable test input.

## Rules

- Treat HAR parsing as generic.
- Put client-specific expectations in replay profiles, not in HAR extraction.
- Remove secrets and volatile headers from generated fixtures.

## Script

Use `scripts/extract-har-fixtures.mjs`.
