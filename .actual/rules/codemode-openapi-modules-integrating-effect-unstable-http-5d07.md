# Adoption of Effect for OpenAPI Processing and HTTP Integration: Modules Integrating Effect Unstable Http Primitives

These rules are ALWAYS ACTIVE for modules integrating Effect unstable HTTP primitives, OpenAPI specification ingestion, type definitions, and HTTP runtime execution modules, as well as schema parsing and validation components interfacing with external API tool contracts.

### Rules

- **R-EFF-001** SHOULD: Modules integrating Effect unstable HTTP primitives SHOULD encapsulate unstable API surfaces within dedicated internal adapter boundaries.
- **R-EFF-002** MANDATORY: Derive schema models using the functional schema constructors provided by the adopted ecosystem and avoid manual type assertions.
- **R-EFF-003** MANDATORY: Ensure all HTTP calls initiated through the OpenAPI tool pipeline are wrapped in appropriate Effect runtime context handlers.
- **R-EFF-004** MANDATORY: Before writing code that uses a versioned library, execute in order: (1) Find the dependency manifest in the repo. (2) Identify the build tool from the manifest. (3) Inspect the repository lock or resolution artifact to determine the exact resolved version. (4) Look up official documentation/changelog for that exact version. (5) Confirm every API, class, or function exists in that exact version's documentation. (6) Re-run steps 3-5 per dependency at point of use.

### Verify

```bash
# Discover and run the project static analysis and type-checking scripts to verify Effect import consistency and type correctness across OpenAPI modules.
# Discover and run the repository automated test suites covering OpenAPI schema parsing and HTTP runtime execution.
```

**Accept when:**
- Static type analysis passes without errors across all OpenAPI type and runtime integration modules.
- All automated integration and unit test suites covering OpenAPI tool execution pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks validate static types and run test suites. Peer code review verifies adherence to Effect conventions and boundary encapsulation.
</enforcement>