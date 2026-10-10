# Drizzle ORM Adoption for Core Domain Persistence: Domain Modules Not Introduce Alternative Persistence

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** MUST_NOT: Domain modules MUST NOT introduce alternative persistence query builders or direct database driver connections that bypass the centralized Drizzle ORM schema definitions.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script across all core packages.
# Locate and execute the automated test suite targeting domain persistence modules to verify relational query execution and transaction handling.
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. All non-compliant code must be refactored to utilize Drizzle ORM table schemas and query builder methods before merging.
</enforcement>