# Drizzle ORM Adoption for Core Domain Persistence: Mutations Spanning Multiple Table Operations Dependent

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** SHOULD: Mutations spanning multiple table operations or dependent event emissions MUST accept an optional transaction handle and default to the primary database client when absent.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated type-checking script across all core packages.
# Locate and execute the automated test suite targeting domain persistence modules to verify relational query execution and transaction handling.
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>