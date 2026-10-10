# Direct JSON.parse Deserialization for Event Payload Ingestion: When External Dependencies Libraries Are Introduced

These rules are ALWAYS ACTIVE for modules parsing incoming serialized event payloads and string inputs, and integration boundary handlers ingesting external payloads.

### Rules

- **R-JSON-001** MUST: When external dependencies or libraries are introduced for schema validation or deserialization, the consumer MUST inspect the repository lock artifact and verify the exact resolved version prior to implementation.
- **R-JSON-002** MUST: Enclose deserialization invocations within exception handling constructs to prevent unhandled runtime rejections.
- **R-JSON-003** MUST: Implement structural verification checks immediately following deserialization to validate object properties before downstream consumption.

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