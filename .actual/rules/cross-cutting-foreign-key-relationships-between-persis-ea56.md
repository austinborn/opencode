# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Foreign Key Relationships Between Persistent Tables

These rules are ALWAYS ACTIVE for relational data schema definitions and persistence models targeting SQLite databases across workspace packages.

### Rules

- **R-DRZ-001** MUST: Foreign key relationships between persistent tables MUST declare explicit cascade or set-null deletion behaviors within the column definition references handler.

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