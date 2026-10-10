# Adoption of Effect for OpenAPI Processing and HTTP Integration: Openapi Specification Processing Http Runtime Invocation

These rules are ALWAYS ACTIVE for OpenAPI specification ingestion, type definitions, HTTP runtime execution modules, schema parsing, and validation components interfacing with external API tool contracts.

### Rules

- **R-OPN-001** MUST: OpenAPI specification processing and HTTP runtime invocation MUST use the Effect library ecosystem for functional effect handling, schema extraction, and HTTP operations.
- **R-OPN-002** MUST: Derive schema models using the functional schema constructors provided by the adopted ecosystem and avoid manual type assertions.
- **R-OPN-003** MUST: Ensure all HTTP calls initiated through the OpenAPI tool pipeline are wrapped in appropriate Effect runtime context handlers.
- **R-OPN-004** MUST: Execute the lock-version grounding protocol (dependency manifest discovery, build tool identification, lock/resolution inspection, public API documentation lookup, exact version verification) before writing code that uses a versioned library.
- **R-OPN-005** MUST: Isolate unstable subpath imports within internal adapter modules and enforce strict lock-version verification before updating dependencies.

### Verify

```bash
# Discover and run the project static analysis and type-checking scripts
# Discover and run the repository automated test suites covering OpenAPI schema parsing and HTTP runtime execution
```

**Accept when:**
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>