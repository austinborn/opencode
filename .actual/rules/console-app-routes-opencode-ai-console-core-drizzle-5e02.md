# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Route Endpoints Presentation Components Not Instantiate

These rules are ALWAYS ACTIVE for all server-side route loaders, actions, API endpoints, and internal modules interacting with relational database entities.

### Rules

- **R-PERSIST-001** MUST_NOT: Route endpoints and presentation components MUST NOT instantiate or invoke direct database driver connections outside of the provided Database.use transaction boundary.

### Verify

```bash
# Discover and run the project test runner from the root manifest covering database route handlers
# Discover and run the project type checker to verify query schemas and Database.use callback parameters
# Discover and run the project linting suite to ensure no unmanaged database imports exist outside core persistence boundaries
```

**Accept when:**
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration type checking, static analysis routines, and peer code review.
</enforcement>