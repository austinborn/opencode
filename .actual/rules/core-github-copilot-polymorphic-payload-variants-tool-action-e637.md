# Zod Schema Validation for Provider Contracts and Tool Definitions: Polymorphic Payload Variants Tool Action Definitions

These rules are ALWAYS ACTIVE for all provider integration modules, tool definitions, error adapters, and option configuration parsers interfacing with external communication and language model endpoints.

### Rules

- **R-ZOD-001** MUST: Polymorphic payload variants and tool action definitions MUST be modeled using discriminated unions to ensure exhaustive type narrowing and deterministic structural validation.

### Verify

```bash
# Discover and execute the project test runner covering provider and tool validation modules
# Discover and execute the project static analysis suite to verify zero type errors
```

**Accept when:**
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks, peer code review, and build rejection mechanisms enforce these runtime schema requirements.
</enforcement>