# Adoption of Effect for OpenAPI Processing and HTTP Integration: Engineers Inspect Repository Lock Artifact Determine

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, type definitions, and HTTP runtime execution modules.

### Rules

- **R-OPN-001** MUST: Engineers MUST inspect the repository lock artifact to determine the exact resolved dependency versions of the Effect ecosystem and verify API stability prior to implementation.

### Verify

```bash
# Discover and run the project static analysis, type-checking scripts, and automated test suites covering OpenAPI schema parsing and HTTP runtime execution.
```

**Accept when:**
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>