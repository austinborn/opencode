# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Consumers Inspect Project Lock Resolution Artifact

These rules are ALWAYS ACTIVE for server-side route loaders, actions, API endpoints, and internal modules executing database reads, writes, or mutations.

### Rules

- **R-OPENC-001** MUST: Consumers MUST inspect the project lock and resolution artifact to resolve the exact locked versions of the underlying query engine and relational libraries before authoring or modifying data access routines.

### Verify

```bash
# Discover the project test runner from the root manifest and run test suites covering database route handlers.
# Discover and run the project type checker to verify that query schemas and Database.use callback parameters pass static type inspection.
# Discover and run the project linting suite to ensure no unmanaged database imports exist outside core persistence boundaries.
```

**Accept when:**
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>