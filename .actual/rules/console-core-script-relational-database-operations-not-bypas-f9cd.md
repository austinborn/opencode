# Drizzle ORM for Transactional Data Access via Database.use: Relational Database Operations Not Bypass Use

These rules are ALWAYS ACTIVE for all operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

### Rules

- **R-DB-001** MUST_NOT: Relational database operations MUST NOT bypass Database.use to establish direct, unmanaged client connections or issue raw unescaped SQL strings.

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
Claude Code MUST NOT skip or defer verification. All relational database interactions must use Database.use and be verified via static analysis and test suites.
</enforcement>