# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Server Query Procedures Requiring Tenant Context

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, and route loaders accessing tenant-scoped data stores.

### Rules

- **R-ACTOR-001** MUST: Server query procedures requiring tenant context MUST execute within withActor execution wrappers to bind ambient actor state during database access.

### Verify

```bash
# Discover the project verification script from the root configuration and execute static analysis across server route modules.
# Inspect the project automation manifests to locate and execute test suites validating actor context propagation.
# Search the repository task runners to run typecheck and lint procedures across context and data-access packages.
```

**Accept when:**
- All server-side queries accessing tenant-scoped data invoke withActor and resolve identity via @opencode-ai/console-core/actor.js without reading unvalidated client parameters.
- Static analysis and project test suites confirm no direct tenant database queries bypass actor context resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated pull request checks and peer code review enforce actor context wrapping around multi-tenant database operations.
</enforcement>