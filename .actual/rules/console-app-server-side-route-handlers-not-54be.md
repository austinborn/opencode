# Adoption of @opencode-ai/console-core/actor.js for Request Context and Identity Scoping: Server Side Route Handlers Not Bypass

These rules are ALWAYS ACTIVE for all server queries, data mutation handlers, and route loaders accessing tenant-scoped data stores.

### Rules

- **R-ACTOR-001** MUST_NOT: Server-side route handlers MUST NOT bypass actor context resolution when querying multi-tenant database tables.

### Verify

```bash
# Discover and execute static analysis across server route modules
npm run lint || pnpm lint || yarn lint
# Run typecheck and test suites validating actor context propagation
npm test || pnpm test || yarn test
```

**Accept when:**
- All server-side queries accessing tenant-scoped data invoke withActor and resolve identity via @opencode-ai/console-core/actor.js without reading unvalidated client parameters.
- Static analysis and project test suites confirm no direct tenant database queries bypass actor context resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated pull request checks and peer reviews strictly enforce actor context wrapping around multi-tenant database operations.
</enforcement>