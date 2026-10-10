# Drizzle ORM Adoption for Core Domain Persistence: Core Domain Services Use Drizzle Orm

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** MUST: Core domain services MUST use Drizzle ORM as the primary query builder and persistence interface for all relational database reads, inserts, updates, and deletions.
- **R-DRIZZLE-002** MAY: Exceptions apply for unsupported database features where raw SQL template expressions cannot represent the query safely (EXC-20-001).

### Verify

```bash
# Discover workspace dependency manifest and execute type-checking across core packages
# Locate and execute automated test suite targeting domain persistence modules
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated CI workflows and peer code reviews.
</enforcement>