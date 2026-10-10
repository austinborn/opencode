# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Concurrent Memory Mutable State Collections Requiring

These rules are ALWAYS ACTIVE for asynchronous core runtime services managing in-memory integration and attempt state, and protocol module specifications defining HTTP endpoint schemas and route parameters.

### Rules

- **R-EFF-001** MUST: Concurrent in-memory mutable state collections requiring atomic updates across asynchronous steps MUST use SynchronizedRef primitives rather than raw mutable variables or uncoordinated promises.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration checks executing compiler type validation and test suites on every pull request, alongside mandatory architectural peer review.
</enforcement>