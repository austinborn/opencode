# Centralize Referral Domain Operations via @opencode-ai/console-core/referral.js: Application Entry Points Interacting Referral Workflows

These rules are ALWAYS ACTIVE for all application routes, server queries, background tasks, and utility functions that create, inspect, or summarize referral entities.

### Rules

- **R-REF-001** MUST: All application entry points interacting with referral workflows MUST consume domain operations directly from @opencode-ai/console-core/referral.js rather than re-implementing referral logic or querying underlying persistence layers directly.

### Verify

```bash
# Discover and execute the project linting and architectural boundary validation suite to detect unauthorized direct database dependencies in application consumers.
# Discover and execute the workspace test suite covering referral domain operations, route handlers, and server queries.
```

**Accept when:**
- All referral creation, summary, and preview operations resolve through the centralized domain module without direct persistence bypasses.
- Static code analysis and architectural boundary checks confirm zero unapproved external or raw database dependencies in referral consumer modules.
- Automated test suites verify expected referral domain responses across all server query and route entry points.

<enforcement>
Claude Code MUST NOT skip or defer verification. All referral operations must route through the centralized domain module within an authenticated actor context, verified via automated lint, architectural boundary checks, and CI test suite execution.
</enforcement>