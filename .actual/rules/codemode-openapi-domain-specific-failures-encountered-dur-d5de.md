# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Domain Specific Failures Encountered During Plan

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, schema parsing, parameter resolution modules, and dynamic HTTP request execution pipelines generating tool invocations from OpenAPI descriptions.

### Rules

- **R-OPN-001** SHOULD: Domain-specific failures encountered during plan generation and invocation SHOULD be wrapped into structured tool error types rather than propagating raw uncaught exceptions.

### Verify

```bash
# Discover and run test suite covering OpenAPI spec parsing and runtime execution
# Discover and run static analysis and type verification across OpenAPI modules
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>