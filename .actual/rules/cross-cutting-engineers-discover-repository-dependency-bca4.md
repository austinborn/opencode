# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Engineers Discover Repository Dependency Lock Artifact

These rules are ALWAYS ACTIVE for all files matching the configured scope: asynchronous core runtime services managing in-memory integration and attempt state, and protocol module specifications defining HTTP endpoint schemas and route parameters.

### Rules

- **R-EFFECT-001** MUST: Engineers MUST discover the repository dependency lock artifact and verify the exact resolved version of the Effect library before writing or updating module implementations.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks execute compiler type validation and test suites on every pull request.
</enforcement>