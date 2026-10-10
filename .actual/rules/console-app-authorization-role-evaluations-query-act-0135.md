# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Authorization Role Evaluations Query Actor Userrole

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, route loaders accessing tenant-scoped data stores, and internal library modules performing authenticated identity or role resolution.

### Rules

- **R-ACT-001** MUST: Authorization role evaluations MUST query Actor.userRole() within the authenticated actor context to enforce administrative access controls.

### Verify

```bash
# Discover and execute project verification, typecheck, lint, and test scripts from project configuration
```

**Accept when:**
- All server-side queries accessing tenant-scoped data invoke withActor and resolve identity via @opencode-ai/console-core/actor.js without reading unvalidated client parameters.
- Static analysis and project test suites confirm no direct tenant database queries bypass actor context resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests must verify actor context wrapping around multi-tenant database operations.
</enforcement>