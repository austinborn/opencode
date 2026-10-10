# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Remote Http Interactions Initiated Openapi Tooling

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, schema parsing, parameter resolution modules, and dynamic HTTP request execution pipelines generating tool invocations from OpenAPI descriptions.

### Rules

- **R-EFF-001** MUST: Remote HTTP interactions initiated by OpenAPI tooling MUST route execution through Effect HTTP client structures to ensure centralized request preparation and failure representation.

### Verify

```bash
# Discover the project test execution runner from the dependency manifest and run the test suite covering OpenAPI spec parsing and runtime execution.
# Discover the static analysis and type verification script from the project manifest and execute type checking across OpenAPI modules.
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds fail upon type or test mismatches. Pull requests bypassing Effect runtime primitives in OpenAPI modules are blocked during code review until refactored.
</enforcement>