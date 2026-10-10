# Drizzle ORM Adoption for Core Domain Persistence: Database Interactions Execute Through Declared Table

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** MUST: All database interactions MUST execute through declared table schema objects rather than raw unvalidated SQL strings.

### Verify

```bash
# Discover workspace dependency manifest and execute type-checking script across all core packages
# Locate and execute automated test suite targeting domain persistence modules
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration workflows and peer code reviews.
</enforcement>