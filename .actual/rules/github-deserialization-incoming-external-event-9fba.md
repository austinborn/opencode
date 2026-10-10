# Direct JSON.parse Deserialization for Event Payload Ingestion: Deserialization Incoming External Event Payloads Json

These rules are ALWAYS ACTIVE for modules parsing incoming serialized event payloads and string inputs, and integration boundary handlers ingesting external payloads.

### Rules

- **R-DES-001** MUST: Deserialization of incoming external event payloads using JSON.parse MUST be enclosed within structured error-handling guards to intercept and sanitize syntax errors.

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