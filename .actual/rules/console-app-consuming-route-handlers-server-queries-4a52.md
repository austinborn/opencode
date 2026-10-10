# Centralize Referral Domain Operations via @opencode-ai/console-core/referral.js: Consuming Route Handlers Server Queries Not

These rules are ALWAYS ACTIVE for all application routes, server queries, background tasks, and utility functions that create, inspect, or summarize referral entities.

### Rules

- **R-REF-001** MUST_NOT: Consuming route handlers and server queries MUST NOT bypass domain module boundaries to query referral database tables or cache stores directly.

### Verify

```bash
# Discover and execute the project linting and architectural boundary validation suite
# Discover and execute the workspace test suite covering referral domain operations, route handlers, and server queries
```

**Accept when:**
- All referral creation, summary, and preview operations resolve through the centralized domain module without direct persistence bypasses.
- Static code analysis and architectural boundary checks confirm zero unapproved external or raw database dependencies in referral consumer modules.
- Automated test suites verify expected referral domain responses across all server query and route entry points.

<enforcement>
Claude Code MUST NOT skip or defer verification. All referral operations must be verified via automated lint, architectural boundary checks, and test suites.
</enforcement>