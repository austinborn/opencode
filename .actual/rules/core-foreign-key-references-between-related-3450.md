# Drizzle ORM SQLite Core Schema Modeling: Foreign Key References Between Related Tables

These rules are ALWAYS ACTIVE for all relational database table definitions and schema declarations within the core persistent data layer, and domain entities requiring persistent storage with relational constraints and typed attributes.

### Rules

- **R-DRIZZLE-001** MUST: Foreign key references between related tables MUST be declared using the references column helper with explicit deletion handling rules.

### Verify

```bash
# Discover the repository package manifest and execute the designated type-checking script
# Example discovery pattern:
# 1. Locate package.json / manifest
# 2. Run type-checking script (e.g., npm run check, tsc --noEmit)
# 3. Execute database migration and integration verification test suites
```

**Accept when:**
- The static type checking process confirms zero type errors across all database schema declarations and domain type bindings.
- All database schema migration and integration test suites pass without constraint or syntax failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>