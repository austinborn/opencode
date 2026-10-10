# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Engineers Inspect Project Lock Resolution Artifact

These rules are ALWAYS ACTIVE for all provider language model adapters, chat models, response generators, tool definitions, parameter schemas, execution converters, and error handling and parsing utilities interacting with provider APIs.

### Rules

- **R-PROV-001** MUST: Engineers MUST inspect the project lock or resolution artifact to determine the exact resolved dependency version of @ai-sdk/provider-utils and verify public API compatibility prior to introducing or updating provider integrations.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration pipelines executing type checks, unit tests, and linting rules, as well as peer code reviews.
</enforcement>