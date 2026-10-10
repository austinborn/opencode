# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: State Mutation Finalization Routines Side Effecting

These rules are ALWAYS ACTIVE for state mutation finalization routines, side-effecting event dispatches, asynchronous core runtime services managing in-memory integration and attempt state, and protocol module specifications defining HTTP endpoint schemas and route parameters.

### Rules

- **R-EFF-001** MUST: State mutation finalization routines and side-effecting event dispatches MUST compose operations through Effect pipeline combinators to ensure deterministic execution order and proper error propagation.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration checks and architectural peer reviews.
</enforcement>