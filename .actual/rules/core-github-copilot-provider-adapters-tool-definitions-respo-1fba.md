# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Provider Adapters Tool Definitions Response Converters

These rules are ALWAYS ACTIVE for all provider adapters, tool definitions, response converters, and language model integrations.

### Rules

- **R-PROV-001** MUST: All provider adapters, tool definitions, and response converters within the provider domain MUST use @ai-sdk/provider-utils as the primary utility library for common provider infrastructure and response parsing.
- **R-PROV-002** MANDATORY: Before writing code that uses a versioned library, discover the dependency manifest, identify the build tool, inspect the repository lock/resolution artifact for the exact resolved version, and confirm every API, class, or function exists in that exact version's documentation.
- **R-PROV-003** MANDATORY: Structure tool parameter schemas and provider error translators to utilize the standardized interfaces exposed by the provider utility library.

### Verify

```bash
# Discover and run the project test runner to execute the provider test suites across all model adapters.
# Discover and run the static analysis script to ensure all provider and tool modules adhere to dependency conventions.
# Discover and run the type-checking script to verify interface compatibility against the resolved dependency version.
```

**Accept when:**
- All provider adapter and tool integration test suites pass without runtime errors.
- Static analysis validates that provider utilities are consistently imported and no duplicate parsing logic exists.
- Type checks pass cleanly with no type signature mismatches against the provider utility declarations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipelines executing type checks, unit tests, and linting rules, and peer code reviews.
</enforcement>