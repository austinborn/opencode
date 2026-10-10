# Drizzle ORM for Transactional Data Access via Database.use: Relational Queries Mutations Receive Transactional Context

These rules are ALWAYS ACTIVE for all operational scripts, batch processing tasks, and backend services performing relational database queries or mutations.

### Rules

- **R-DRIZZLE-001** MUST: Relational queries and mutations MUST receive the transactional context provided by Database.use to compose operations using schema table models and relational filter operators.
- **R-DRIZZLE-002** MANDATORY: Discover dependency manifest, identify build tool, inspect lock/resolution artifact, and look up official documentation for exact resolved versions before using any version-sensitive library or API.

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