# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Consumers Discover Project Dependency Manifest Inspect

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, route loaders accessing tenant-scoped data stores, and internal library modules performing authenticated identity or role resolution.

### Rules

- **R-ACTOR-001** MUST: Consumers MUST discover the project dependency manifest and inspect the repository resolution lock artifact to identify the exact locked version of @opencode-ai/console-core/actor.js before implementing or modifying actor integrations.

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
Claude Code MUST NOT skip or defer verification. All server database queries must operate within active actor context and verified automated checks.
</enforcement>