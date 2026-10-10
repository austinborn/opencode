# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Complex Structured Column Values Returned Database

These rules are ALWAYS ACTIVE for all server-side route loaders, actions, API endpoints executing database reads/mutations, and internal modules interacting with relational database entities.

### Rules

- **R-DB-001** SHOULD: Complex or structured column values returned from database queries SHOULD be validated and parsed immediately upon retrieval within the data retrieval boundary.

### Verify

```bash
# Discover and run the project test runner from the root manifest covering database route handlers
# Discover and run the project type checker to verify query schemas and callback parameters
# Discover and run the project linting suite to ensure no unmanaged database imports exist
```

**Accept when:**
- All server-side database operations execute within Database.use callback scopes.
- Static type checking completes with zero diagnostic errors across database query operations.
- Automated tests covering route data retrieval and mutations pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking and static analysis routines enforce these rules, and violations block pull requests.
</enforcement>