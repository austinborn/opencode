# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Response Converters Schema Transformations Route Through

These rules are ALWAYS ACTIVE for implementation of provider language model adapters, chat models, response generators, tool definitions, parameter schemas, and error handling and parsing utilities across the provider integration boundary.

### Rules

- **R-PRV-001** SHOULD: Response converters and schema transformations SHOULD route through standard provider utility helpers to ensure uniform handling of provider-specific message payloads.

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
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipelines executing type checks, unit tests, and linting rules, as well as peer code review.
</enforcement>