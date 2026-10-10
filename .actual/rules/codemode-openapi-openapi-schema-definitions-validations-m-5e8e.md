# Adoption of Effect for OpenAPI Processing and HTTP Integration: Openapi Schema Definitions Validations Modeled Effect

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, type definitions, HTTP runtime execution modules, schema parsing, and validation components interfacing with external API tool contracts.

### Rules

- **R-OPENAPI-001** MUST: OpenAPI schema definitions and validations MUST be modeled using Effect JsonSchema modules rather than external schema conversion runtimes.

### Verify

```bash
# Discover and run project static analysis and type-checking scripts to verify Effect import consistency and type correctness
# Discover and run repository automated test suites covering OpenAPI schema parsing and HTTP runtime execution
```

**Accept when:**
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>