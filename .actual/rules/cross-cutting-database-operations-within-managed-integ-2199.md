# Effect Adoption for Contextual Service Management and Database Runtime Execution: Database Operations Within Managed Integration Layers

These rules are ALWAYS ACTIVE for all core database modules, platform-specific database adapters, and database session integration layers within the repository, as well as all internal services and workspace libraries defining or consuming database client abstractions.

### Rules

- **R-DB-001** MUST_NOT: Database operations within the managed integration layers MUST NOT bypass the Effect execution pipeline to execute untracked background execution.

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