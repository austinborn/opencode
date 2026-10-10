# Effect Adoption for OpenAPI Tool Execution and Schema Representation: Before Implementing Updating Any Interaction Effect

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-EFF-001** MUST: Before implementing or updating any interaction with the Effect ecosystem, developers MUST inspect the repository lock artifact to determine the authoritative installed version and verify API compatibility against official documentation.

### Verify

```bash
# Discover the dependency manifest and run the test suite covering OpenAPI spec parsing and runtime execution
# Discover the static analysis and type verification script from the project manifest and execute type checking across OpenAPI modules
```

**Accept when:**
- All OpenAPI specification parsing and runtime execution test suites execute successfully without errors.
- Static type analysis passes with zero diagnostic errors across all OpenAPI schema and runtime source files.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>