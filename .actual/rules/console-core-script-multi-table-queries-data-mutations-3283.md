# Drizzle ORM for Transactional Data Access via Database.use: Multi Table Queries Data Mutations Utilize

These rules are ALWAYS ACTIVE for all operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

### Rules

- **R-DRIZZLE-001** SHOULD: Multi-table queries and data mutations SHOULD utilize fluent query builder methods provided by Drizzle ORM rather than manual SQL strings.

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