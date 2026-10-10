# Effect Adoption for Contextual Service Management and Database Runtime Execution: Database Session Boundaries Manage Resource Lifecycles

These rules are ALWAYS ACTIVE for core database modules, platform-specific database adapters, and database session integration layers within the repository, as well as all internal services and workspace libraries defining or consuming database client abstractions.

### Rules

- **R-DB-001** MUST: Database session boundaries MUST manage resource lifecycles and cleanup guarantees through Scope and Exit primitives.
- **R-DB-002** MUST: Derive driver configuration from the active fiber context through Context.get rather than parameter drilling.
- **R-DB-003** MUST: Ensure all database sessions acquire and release connection resources within Scope blocks to guarantee automatic closure upon exit.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script to confirm valid Effect API usage.
# Discover the repository test runner from the project manifest and execute the database integration test suite.
```

**Accept when:**
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline and architectural peer code reviews.
</enforcement>