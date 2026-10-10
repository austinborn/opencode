# Zod Schema Validation for Provider Contracts and Tool Definitions: Provider Integration Layer Define External Input

These rules are ALWAYS ACTIVE for all provider integration modules handling external communication, request formatting, response parsing, and tool definitions specifying input argument schemas, execution actions, and output structures.

### Rules

- **R-ZOD-001** MUST: The provider integration layer MUST define all external input boundaries, tool execution parameters, provider options, and response structures using declarative Zod schemas.

### Verify

```bash
# Discover and execute the project test runner covering provider and tool validation modules
# Discover and execute the project static analysis suite to verify inferred types and schema definitions
```

**Accept when:**
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks execute repository test and static analysis workflows on all pull requests, blocking changes lacking runtime schema validation or containing manual duplicate types.
</enforcement>