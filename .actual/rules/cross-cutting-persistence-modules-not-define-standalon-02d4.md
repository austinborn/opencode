# Drizzle ORM SQLite Core for Relational Schema Modeling and Persistence: Persistence Modules Not Define Standalone Untyped

These rules are ALWAYS ACTIVE for relational data schema definitions, persistence models, and data migrations targeting SQLite databases across workspace packages.

### Rules

- **R-DRIZZLE-001** MUST_NOT: Persistence modules MUST NOT define standalone, untyped raw SQL DDL migration strings or untyped table representations where Drizzle ORM declarative schema models are supported.

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
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipeline and peer review verify adherence to Drizzle ORM declarations.
</enforcement>