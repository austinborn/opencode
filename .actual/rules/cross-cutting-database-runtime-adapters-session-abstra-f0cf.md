# Effect Adoption for Contextual Service Management and Database Runtime Execution: Database Runtime Adapters Session Abstractions Model

These rules are ALWAYS ACTIVE for all core database modules, platform-specific database adapters, and database session integration layers within the repository.

### Rules

- **R-DB-001** MUST: All database runtime adapters and session abstractions MUST model operations and resource lifecycles using Effect primitives rather than unstructured asynchronous promises or raw callback routines.

### Verify

```bash
# Discover workspace dependency manifest and execute the designated type-checking script
# Discover repository test runner from project manifest and execute the database integration test suite
```

**Accept when:**
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>