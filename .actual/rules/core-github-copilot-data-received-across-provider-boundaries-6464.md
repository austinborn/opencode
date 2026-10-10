# Zod Schema Validation for Provider Contracts and Tool Definitions: Data Received Across Provider Boundaries Tool

These rules are ALWAYS ACTIVE for all provider integration modules, tool definitions, error adapters, and option configuration parsers interfacing with language model endpoints.

### Rules

- **R-ZOD-001** MUST: Data received across provider boundaries and tool execution interfaces MUST be validated via runtime schema parsing methods before internal consumption or processing.
- **R-ZOD-002** MANDATORY: Construct tool action schemas using discriminated unions on a discriminator property to ensure clear separation and type narrowing across tool operations.
- **R-ZOD-003** MANDATORY: Export static inferred types derived directly from schema instances to provide strongly typed interfaces throughout dependent modules.

### Verify

```bash
# Discover and run project test suite covering provider and tool validation modules
# Discover and run project static analysis suite to verify inferred types and schema definitions
```

**Accept when:**
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests lacking runtime schema validation for boundary data or containing manual duplicate types are blocked from merging.
</enforcement>