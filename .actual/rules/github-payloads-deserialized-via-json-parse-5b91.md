# Direct JSON.parse Deserialization for Event Payload Ingestion: Payloads Deserialized Via Json Parse Undergo

These rules are ALWAYS ACTIVE for modules parsing incoming serialized event payloads and string inputs, and integration boundary handlers ingesting external payloads.

### Rules

- **R-JSON-001** SHOULD: Payloads deserialized via JSON.parse SHOULD undergo structural assertion guards before downstream consumer access.

### Verify

```bash
grep -rn "JSON.parse" .
echo "Discover and execute test suite configured in repository root"
```

**Accept when:**
- All input deserialization operations handle malformed inputs without unhandled exceptions
- Discovered validation test suites pass completely

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>