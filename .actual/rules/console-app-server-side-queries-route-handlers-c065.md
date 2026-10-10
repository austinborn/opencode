# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Server Side Queries Route Handlers Accessing

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, and route loaders accessing tenant-scoped data stores.

### Rules

- **R-ACTOR-001** MUST: Server-side queries and route handlers accessing tenant-scoped data MUST utilize @opencode-ai/console-core/actor.js to establish and resolve caller identity and authorization state.

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
Claude Code MUST NOT skip or defer verification. All pull requests containing unwrapped server queries or manual tenant identifier lookups will be blocked from merging.
</enforcement>