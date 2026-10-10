# Drizzle ORM SQLite Core Schema Modeling: Columns Storing Structured Composite Objects Within

These rules are ALWAYS ACTIVE for all relational database table definitions and schema declarations within the core persistent data layer, and domain entities requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** SHOULD: Columns storing structured composite objects within text storage SHOULD configure the json mode property on the text column builder.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script to confirm schema definition type compatibility.
# Discover the project test configuration and execute the database migration and integration verification test suites.
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>