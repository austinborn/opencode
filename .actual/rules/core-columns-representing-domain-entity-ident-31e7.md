# Drizzle ORM SQLite Core Schema Modeling: Columns Representing Domain Entity Identifiers Custom

These rules are ALWAYS ACTIVE for all relational database table definitions, schema declarations within the core persistent data layer, and domain entities requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** MUST: Columns representing domain entity identifiers or custom value objects MUST bind their corresponding application domain types using the .$type column modifier.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script
# Discover the project test configuration and execute the database migration and integration verification test suites
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory and enforced by automated static analysis, type checking, and peer review during continuous integration pipelines.
</enforcement>