# Drizzle ORM Adoption for Core Domain Persistence: Dynamic Expressions Parameter Bindings Within Queries

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** MUST: Dynamic expressions and parameter bindings within queries MUST use the sql template literal tag provided by Drizzle ORM to prevent injection vulnerabilities and preserve type inference.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script across all core packages.
# Locate and execute the automated test suite targeting domain persistence modules to verify relational query execution and transaction handling.
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration workflows executing type verification and unit test suites, and peer code reviews.
</enforcement>