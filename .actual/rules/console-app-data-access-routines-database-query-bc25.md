# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Data Access Routines Database Query Filters

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, and route loaders accessing tenant-scoped data stores.

### Rules

- **R-ACTOR-001** MUST: Data access routines and database query filters MUST resolve account ownership directly from Actor.account() rather than unvalidated client-supplied parameters.

### Verify

```bash
# Discover the project verification script from root configuration and execute static analysis across server route modules
npm run lint
npm run typecheck
npm test
```

**Accept when:**
- All server-side queries accessing tenant-scoped data invoke withActor and resolve identity via @opencode-ai/console-core/actor.js without reading unvalidated client parameters.
- Static analysis and project test suites confirm no direct tenant database queries bypass actor context resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. All server database queries must operate within active actor context and bypass of actor account validation will cause automated checks and pull requests to be blocked.
</enforcement>