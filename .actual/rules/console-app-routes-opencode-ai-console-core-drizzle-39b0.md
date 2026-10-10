# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Server Side Data Access Routines Requiring

These rules are ALWAYS ACTIVE for server-side route loaders, actions, API endpoints, and internal modules interacting with relational database entities.

### Rules

- **R-DB-001** MUST: Server-side data access routines requiring database interactions MUST execute all query and mutation operations exclusively through the @opencode-ai/console-core/drizzle internal module using the Database.use transactional wrapper.

### Verify

```bash
# Discover and run the project test runner covering database route handlers
# Discover and run the project type checker to verify query schemas and Database.use callback parameters
# Discover and run the project linting suite to ensure no unmanaged database imports exist outside core persistence boundaries
```

**Accept when:**
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, static analysis, and peer code reviews enforce these rules.
</enforcement>