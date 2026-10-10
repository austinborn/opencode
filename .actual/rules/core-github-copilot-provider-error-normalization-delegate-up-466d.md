# Standardize Model Provider Implementation on @ai-sdk/provider-utils: Provider Error Normalization Delegate Upstream Envelope

These rules are ALWAYS ACTIVE for all implementation of provider language model adapters, chat models, response generators, tool definitions, parameter schemas, execution converters, and error handling and parsing utilities across the provider integration boundary.

### Rules

- **R-PRV-001** MUST: Provider error normalization MUST delegate upstream error envelope inspection and code extraction to @ai-sdk/provider-utils error utilities.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>