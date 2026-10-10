# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Schema Column Definitions Requiring Domain Validation

These rules are ALWAYS ACTIVE for all relational data schema definitions and persistence models targeting SQLite databases across workspace packages, data migrations, and transactional database access routines interacting with SQLite stores.

### Rules

- **R-DRIZZLE-001** MUST: Schema column definitions requiring domain validation or branded identifiers MUST bind their domain types using the Drizzle ORM column type parameter method rather than loose primitive database types.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>