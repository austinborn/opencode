# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Database Queries Mutations Defined Within Transaction

These rules are ALWAYS ACTIVE for all server-side route loaders, actions, API endpoints, and internal modules interacting with relational database entities.

### Rules

- **R-OPC-001** MUST: Database queries and mutations MUST be defined within the transaction callback argument provided by Database.use rather than initiating independent, unmanaged database client connections.

### Verify

```bash
# Discover and run the project type checker to verify query schemas and Database.use parameters
# Discover and run test suites covering database route handlers
# Discover and run the project linting suite to ensure no unmanaged database imports exist outside core persistence boundaries
```

**Accept when:**
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration type checking, static analysis routines, and peer code review auditing database access patterns.
</enforcement>