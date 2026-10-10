# Drizzle ORM Adoption for Core Domain Persistence: Engineers Discover Repository Dependency Manifest Lock

These rules are ALWAYS ACTIVE for all relational database interactions within core domain services and state management modules.

### Rules

- **R-DRIZZLE-001** MUST: Engineers MUST discover the repository dependency manifest and lock artifact to resolve the exact locked version of Drizzle ORM before invoking its APIs or introducing new schema definitions.

### Verify

```bash
# Discover workspace dependency manifest and execute type-checking script across core packages
# Locate and execute automated test suite targeting domain persistence modules
```

**Accept when:**
- All domain persistence queries compile without type errors against the resolved schema table definitions.
- Automated database integration and unit tests for core domain services execute with zero failures.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>