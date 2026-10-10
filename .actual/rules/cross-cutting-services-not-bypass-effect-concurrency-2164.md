# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Services Not Bypass Effect Concurrency Primitives

These rules are ALWAYS ACTIVE for all asynchronous core runtime services managing in-memory integration/attempt state and protocol module specifications defining HTTP endpoint schemas.

### Rules

- **R-EFF-001** MUST_NOT: Services MUST NOT bypass Effect concurrency primitives by using uncoordinated native mutable state maps across asynchronous execution boundaries.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration checks and architectural peer review.
</enforcement>