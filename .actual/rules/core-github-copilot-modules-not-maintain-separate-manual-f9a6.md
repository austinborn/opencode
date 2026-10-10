# Zod Schema Validation for Provider Contracts and Tool Definitions: Modules Not Maintain Separate Manual Type

These rules are ALWAYS ACTIVE for all provider integration modules, tool definitions, error adapters, and option configuration parsers interfacing with external communication and language model endpoints.

### Rules

- **R-ZOD-001** MUST_NOT: Modules MUST NOT maintain separate manual type definitions that duplicate schema structures, and MUST infer static types directly from the authoritative runtime schemas.
- **R-ZOD-002** MANDATORY: Construct tool action schemas using discriminated unions on a discriminator property to ensure clear separation and type narrowing across tool operations.
- **R-ZOD-003** MANDATORY: Export static inferred types derived directly from schema instances to provide strongly typed interfaces throughout dependent modules.

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
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks execute repository test and static analysis workflows on all pull requests. Pull requests lacking runtime schema validation for boundary data or containing manual duplicate types are blocked from merging.
</enforcement>