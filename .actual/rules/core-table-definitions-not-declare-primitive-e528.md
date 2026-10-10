# Drizzle ORM SQLite Core Schema Modeling: Table Definitions Not Declare Primitive Untyped

These rules are ALWAYS ACTIVE for all relational database table definitions and schema declarations within the core persistent data layer requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** MUST_NOT: Table definitions MUST_NOT declare primitive untyped columns when corresponding domain-specific entity types or value interfaces exist.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script to confirm schema definition type compatibility.
# Discover the project test configuration and execute the database migration and integration verification test suites.
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer reviews enforce these requirements.
</enforcement>