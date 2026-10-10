# Zod Schema Validation for Provider Contracts and Tool Definitions: Provider Configuration Options External Error Payloads

These rules are ALWAYS ACTIVE for all provider integration modules handling external communication, request formatting, response parsing, tool definitions specifying input argument schemas, execution actions, and output structures, and all error adapters and option configuration parsers interfacing with language model endpoints.

### Rules

- **R-ZOD-001** SHOULD: Provider configuration options and external error payloads SHOULD use partial or optional schema properties with defensive fallback types to maintain resilience against minor upstream protocol deviations.
- **R-ZOD-002** MANDATORY: Construct tool action schemas using discriminated unions on a discriminator property to ensure clear separation and type narrowing across tool operations.
- **R-ZOD-003** MANDATORY: Export static inferred types derived directly from schema instances to provide strongly typed interfaces throughout dependent modules.
- **R-ZOD-004** MANDATORY: Execute lock-version grounding before writing code that uses a versioned library by finding the manifest, identifying the build tool, inspecting the lock/resolution artifact, looking up official docs for that exact version, confirming API existence, and re-running per dependency at point of use.

### Verify

```bash
# Discover and execute the project test runner covering provider and tool validation modules
# Discover and execute the project static analysis suite to verify zero type errors in inferred types and schemas
```

**Accept when:**
- All unit and integration tests covering provider contract schemas and tool input validation pass without failure.
- Static type analysis completes with zero type errors, confirming schema inference matches downstream consumption signatures.
- Invalid payloads passed to boundary entry points consistently produce structured validation rejection errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks, peer code review, and build validations enforce these rules.
</enforcement>