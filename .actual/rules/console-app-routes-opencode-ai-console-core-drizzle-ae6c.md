# Internal Module Adoption: @opencode-ai/console-core/drizzle for Transactional Persistence: Relational Queries Within Database Use Callbacks

These rules are ALWAYS ACTIVE for server-side route loaders, actions, API endpoints, and internal modules interacting with relational database entities.

### Rules

- **R-OPC-001** MUST: Relational queries within Database.use callbacks MUST construct operations using the typed schema definitions exported by core schema modules rather than untyped raw string queries.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration type checking, static analysis, and peer code review.
</enforcement>