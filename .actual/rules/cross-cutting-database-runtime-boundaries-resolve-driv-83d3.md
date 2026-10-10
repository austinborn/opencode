# Effect Adoption for Contextual Service Management and Database Runtime Execution: Database Runtime Boundaries Resolve Driver Options

These rules are ALWAYS ACTIVE for all core database modules, platform-specific database adapters, and database session integration layers within the repository.

### Rules

- **R-DB-001** MUST: Database runtime boundaries MUST resolve driver options and contextual dependencies through fiber execution context using Context.get.

### Verify

```bash
# Discover workspace dependency manifest and execute type-checking script
# Discover repository test runner from project manifest and execute database integration test suite
```

**Accept when:**
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing unmanaged database connections or bypassing Effect runtime primitives are blocked from merging.
</enforcement>