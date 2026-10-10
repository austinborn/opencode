# Direct JSON.parse Deserialization for Event Payload Ingestion: Modules Not Pass Unvalidated Objects Resulting

These rules are ALWAYS ACTIVE for modules parsing incoming serialized event payloads and string inputs, and integration boundary handlers ingesting external payloads.

### Rules

- **R-JSON-001** MUST_NOT: Modules MUST_NOT pass unvalidated objects resulting from JSON.parse directly into sensitive downstream API calls or security boundaries without verifying required property types.

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