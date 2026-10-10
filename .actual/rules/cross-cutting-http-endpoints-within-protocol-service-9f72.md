# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Http Endpoints Within Protocol Service Group

These rules are ALWAYS ACTIVE for asynchronous core runtime services managing in-memory integration/attempt state and protocol module specifications defining HTTP endpoint schemas and route parameters.

### Rules

- **R-EFFECT-001** MUST: HTTP API endpoints within protocol service group definitions MUST be declared using HttpApiEndpoint specifications with explicit schema parameters, queries, and success responses.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>