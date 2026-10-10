# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Openapi Specification Schema Processing Utilize Effect

These rules are ALWAYS ACTIVE for all OpenAPI specification ingestion, schema parsing, parameter resolution modules, and dynamic HTTP request execution pipelines generating tool invocations.

### Rules

- **R-EFF-001** MUST: OpenAPI specification schema processing MUST utilize Effect JsonSchema representations to ensure consistent type reflection and schema conversion.

### Verify

```bash
# Discover and run test suite covering OpenAPI spec parsing and runtime execution
# Discover and run static analysis / type verification across OpenAPI modules
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds fail upon type or test mismatches, and pull requests bypassing Effect runtime primitives in OpenAPI modules are blocked during code review.
</enforcement>