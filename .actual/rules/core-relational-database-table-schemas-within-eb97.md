# Drizzle ORM SQLite Core Schema Modeling: Relational Database Table Schemas Within Persistent

These rules are ALWAYS ACTIVE for all relational database table definitions and schema declarations within the core persistent data layer requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** MUST: All relational database table schemas within the persistent data storage layer MUST be declared using drizzle-orm/sqlite-core table builder functions.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script
# Discover the project test configuration and execute database migration and integration verification test suites
package_manager=$(find . -name "package.json")
# Execute repository type check and test commands as discovered from the repo
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>