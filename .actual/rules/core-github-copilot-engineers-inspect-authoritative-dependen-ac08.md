# Zod Schema Validation for Provider Contracts and Tool Definitions: Engineers Inspect Authoritative Dependency Resolution Artifact

These rules are ALWAYS ACTIVE for all provider integration modules handling external communication, request formatting, response parsing, tool definitions specifying input argument schemas, execution actions, output structures, and error adapters or option configuration parsers interfacing with language model endpoints.

### Rules

- **R-ZOD-001** MUST: Engineers MUST inspect the authoritative dependency resolution artifact in the repository to determine the exact locked version of the schema validation library before introducing or modifying schema definitions.

### Verify

```bash
# Discover the project test runner and execute the test suite covering provider and tool validation modules.
# Discover the project static analysis suite and verify that all inferred types and schema definitions pass type checking without errors.
```

**Accept when:**
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks and peer code review enforce that all new tool parameters and provider boundaries declare corresponding runtime schemas.
</enforcement>