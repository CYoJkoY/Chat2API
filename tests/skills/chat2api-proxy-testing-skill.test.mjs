import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'

const skillPaths = [
  'skills/chat2api-management-api/SKILL.md',
  'skills/chat2api-har-tool-fixture/SKILL.md',
  'skills/chat2api-tool-client-replay/SKILL.md',
  'skills/chat2api-provider-model-matrix/SKILL.md',
  'skills/chat2api-proxy-testing/SKILL.md',
]

test('versioned Chat2API testing skills exist and have trigger-only descriptions', () => {
  for (const file of skillPaths) {
    const text = fs.readFileSync(file, 'utf8')
    assert.match(text, /^---\nname: [a-z0-9-]+\ndescription: Use when /m, file)
    assert.doesNotMatch(text, /T[B]D|FI[X]ME|deferred work/, file)
  }
})

test('proxy testing skill delegates focused responsibilities', () => {
  const text = fs.readFileSync('skills/chat2api-proxy-testing/SKILL.md', 'utf8')
  assert.match(text, /chat2api-management-api/)
  assert.match(text, /chat2api-har-tool-fixture/)
  assert.match(text, /chat2api-tool-client-replay/)
  assert.match(text, /chat2api-provider-model-matrix/)
})
