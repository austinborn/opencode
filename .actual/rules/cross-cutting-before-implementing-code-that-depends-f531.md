# Effect Adoption for Contextual Service Management and Database Runtime Execution: Before Implementing Code That Depends Effect

These rules are ALWAYS ACTIVE for all core database modules, platform-specific database adapters, database session integration layers, and internal services or workspace libraries defining or consuming database client abstractions.

### Rules

- **R-EFF-001** MUST: Before implementing code that depends on Effect, the consumer MUST inspect the project dependency manifest and resolve the exact locked version from the repository lock artifact.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script to confirm valid Effect API usage.
# Discover the repository test runner from the project manifest and execute the database integration test suite.
```

**Accept when:**
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>