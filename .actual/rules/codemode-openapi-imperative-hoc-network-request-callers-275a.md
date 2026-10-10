# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Imperative Hoc Network Request Callers Not

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, schema parsing, parameter resolution modules, and dynamic HTTP request execution pipelines generating tool invocations.

### Rules

- **R-EFF-001** MUST_NOT: Imperative ad-hoc network request callers MUST NOT bypass the established Effect runtime execution pipeline within OpenAPI modules.

### Verify

```bash
# Discover the project test execution runner from the dependency manifest and run the test suite covering OpenAPI spec parsing and runtime execution.
# Discover the static analysis and type verification script from the project manifest and execute type checking across OpenAPI modules.
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds fail upon type or test mismatches, and pull requests bypassing Effect runtime primitives in OpenAPI modules are blocked during code review until refactored.
</enforcement>