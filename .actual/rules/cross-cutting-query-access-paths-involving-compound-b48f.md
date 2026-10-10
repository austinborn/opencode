# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Query Access Paths Involving Compound Criteria

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-DRIZZLE-001** SHOULD: Query access paths involving compound criteria, ordering timestamps, or uniqueness boundaries SHOULD be declared using table-level index and uniqueIndex builders adjacent to the table schema definition.

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