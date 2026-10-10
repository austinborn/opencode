# Adoption of Effect for OpenAPI Processing and HTTP Integration: Error Channels Within Effect Pipelines Preserve

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, type definitions, and HTTP runtime execution modules, as well as schema parsing and validation components interfacing with external API tool contracts.

### Rules

- **R-EFF-001** MUST: Error channels within Effect pipelines MUST preserve structured diagnostic information when handling schema resolution or HTTP dispatch failures.

### Verify

```bash
# Discover and run the project static analysis and type-checking scripts
# Discover and run the repository automated test suites covering OpenAPI schema parsing and HTTP runtime execution
```

**Accept when:**
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing unhandled promises, raw fetch calls, or unapproved schema libraries in OpenAPI modules are blocked from merging.
</enforcement>