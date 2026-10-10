# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Before Implementing Updating Persistence Schemas Relying

These rules are ALWAYS ACTIVE for all relational data schema definitions, persistence models targeting SQLite databases, data migrations, and transactional database access routines across workspace packages.

### Rules

- **R-PERSIST-001** MUST: Before implementing or updating persistence schemas relying on Drizzle ORM, consumers MUST discover the project dependency manifest and lock artifact to resolve and bind against the exact resolved dependency version.
- **R-PERSIST-002** MUST: Declare each persistent SQLite table using the declarative sqliteTable helper, assigning primary keys, foreign key references with onDelete rules, and custom domain type bounds.
- **R-PERSIST-003** MUST: Attach compound indices and unique constraints via the secondary configuration argument of sqliteTable using index and uniqueIndex builders to ensure query efficiency.

### Verify

```bash
# Discover and execute typecheck verification script from workspace configuration
# Discover and execute schema migration integration test suite
# Discover and execute database persistence test runner across all packages
```

**Accept when:**
- The discovered typecheck script passes across all schema-defining packages with zero type diagnostic errors.
- All discovered database persistence and migration integration test suites complete with all assertions passing.
- All defined SQLite tables export valid schema definitions conforming to Drizzle ORM relational models.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI pipelines and peer architecture/code reviews.
</enforcement>