# Drizzle ORM for Transactional Data Access via Database.use: Persistent Relational Data Access Mutations Queries

These rules are ALWAYS ACTIVE for all operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

### Rules

- **R-DRIZZLE-001** MUST: All persistent relational data access, mutations, and queries MUST use Drizzle ORM query builders and schema definitions encapsulated within the Database.use execution boundary.

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