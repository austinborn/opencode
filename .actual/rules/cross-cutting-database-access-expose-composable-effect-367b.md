# Effect Adoption for Contextual Service Management and Database Runtime Execution: Database Access Expose Composable Effect Values

These rules are ALWAYS ACTIVE for core database modules, platform-specific database adapters, database session integration layers, and all internal services or workspace libraries defining or consuming database client abstractions.

### Rules

- **R-DB-001** SHOULD: Database access APIs SHOULD expose composable Effect values for transaction boundaries and query execution pipelines.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script to confirm valid Effect API usage.
# Discover the repository test runner from the project manifest and execute the database integration test suite.
# (Exact commands are repository-specific; inspect workspace manifests and run type-checks / integration tests).
```

**Accept when:**
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline executing repository validation and test suites on pull requests and architectural peer code review.
</enforcement>