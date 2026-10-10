# Drizzle ORM for Transactional Data Access via Database.use: Before Implementing Modifying Data Access Routines

These rules are ALWAYS ACTIVE for all operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

### Rules

- **R-DRIZZLE-001** MUST: Before implementing or modifying data access routines relying on external or internal library dependencies, engineers MUST inspect the repository lock artifact to determine the authoritative resolved version and verify that all called APIs exist in the documentation for that resolved version.
- **R-DRIZZLE-002** MUST: Execute all relational database queries, inserts, updates, and deletions within the central `Database.use` transaction runner boundary rather than establishing unmanaged direct database connections.
- **R-DRIZZLE-003** MUST: Structure batch processing tasks and long-running scripts to process records in chunked, discrete transaction blocks via `Database.use` to prevent excessive connection lock times.
- **R-DRIZZLE-004** MUST: Use type-safe Drizzle ORM query builder methods and centralized schema models rather than raw unescaped SQL execution.

### Verify

```bash
# Discover and run project static analysis and typecheck suites from the repository manifest
# Discover and execute the database test suite to verify transaction and query behaviors
```

**Accept when:**
- All relational database interactions execute inside the Database.use transaction boundary without establishing unmanaged connections.
- All database queries and mutations compile successfully against the defined schema models without static type errors.
- Repository verification and test suites pass without database connection leaks or query syntax errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>