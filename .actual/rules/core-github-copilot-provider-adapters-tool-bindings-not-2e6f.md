# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Provider Adapters Tool Bindings Not Implement

These rules are ALWAYS ACTIVE for implementation of provider language model adapters, chat models, response generators, tool definitions, parameter schemas, execution converters, and error handling/parsing utilities across the provider integration boundary.

### Rules

- **R-PROVIDER-001** MUST_NOT: Provider adapters and tool bindings MUST NOT implement custom bespoke error mapping or response deserialization routines where standard utilities from @ai-sdk/provider-utils are available.

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
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipelines executing type checks, unit tests, and linting rules, as well as peer code review for any change modifying provider adapters or tool integration boundaries.
</enforcement>