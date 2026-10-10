# Drizzle ORM SQLite Core Schema Modeling: Before Implementing Updating Table Schemas Versioned

These rules are ALWAYS ACTIVE for all relational database table definitions and schema declarations within the core persistent data layer, and domain entities requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** MUST: Before implementing or updating table schemas using versioned schema libraries, engineers MUST inspect the repository lock artifact to determine the exact resolved dependency version and confirm API compatibility.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script to confirm schema definition type compatibility.
# Discover the project test configuration and execute the database migration and integration verification test suites.
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, type checking, and peer review of storage layer schema definitions and migration scripts are mandatory.
</enforcement>