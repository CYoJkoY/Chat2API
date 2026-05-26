---
name: chat2api-tool-client-replay
description: Use when replaying sanitized client tool-calling fixtures against Chat2API with client-specific pass/fail rules.
---

# Chat2API Tool Client Replay

Use this skill to replay fixture scenarios for clients such as Cherry Studio, generic OpenAI tools, or unknown HAR-derived clients.

## Rules

- Preserve exact tool names.
- Validate stream and non-stream behavior separately.
- Use profiles for client-specific prompt-protocol expectations.

## Script

Use `scripts/replay-client-fixture.mjs`.
