# Centralize Referral Domain Operations via @opencode-ai/console-core/referral.js: Consumers Inspect Workspace Dependency Configuration Authoritative

These rules are ALWAYS ACTIVE for all application routes, server queries, background tasks, and utility functions that create, inspect, or summarize referral entities.

### Rules

- **R-REF-001** MUST: Consumers MUST inspect the workspace dependency configuration and authoritative lock artifact to verify the exact resolved version of internal and external dependencies prior to implementation.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>