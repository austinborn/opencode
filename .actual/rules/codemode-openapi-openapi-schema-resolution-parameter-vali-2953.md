# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Openapi Schema Resolution Parameter Validation Dynamic

These rules are ALWAYS ACTIVE for all OpenAPI specification ingestion, schema parsing, parameter resolution modules, and dynamic HTTP request execution pipelines generating tool invocations from OpenAPI descriptions.

### Rules

- **R-EFF-001** MUST: OpenAPI schema resolution, parameter validation, and dynamic HTTP request execution MUST use the Effect library and its associated HTTP and JsonSchema modules as the core operational foundation.

### Verify

```bash
# Discover the project test execution runner from the dependency manifest and run the test suite covering OpenAPI spec parsing and runtime execution.
# Discover the static analysis and type verification script from the project manifest and execute type checking across OpenAPI modules.
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration pipelines executing type checking and unit test suites, and peer code review.
</enforcement>