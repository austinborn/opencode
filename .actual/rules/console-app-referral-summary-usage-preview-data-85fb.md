# Centralize Referral Domain Operations via @opencode-ai/console-core/referral.js: Referral Summary Usage Preview Data Access

These rules are ALWAYS ACTIVE for all application routes, server queries, background tasks, and utility functions that create, inspect, or summarize referral entities.

### Rules

- **R-REF-001** MUST: Referral summary and usage preview data access MUST execute via Referral.summary and Referral.usagePreview within an authenticated actor context.
- **R-REF-002** MANDATORY: Wrap domain queries within authenticated actor scoping to enforce identity boundaries before invoking referral methods when constructing new referral entry points.
- **R-REF-003** MANDATORY: Ensure all payload structures passed to domain creation methods conform strictly to validated schema contracts before execution.
- **R-REF-004** MANDATORY: Before writing code that uses a versioned library, execute in order: find dependency manifest, identify build tool, inspect repository lock or resolution artifact for exact version, look up official documentation/changelog, confirm every API/class/function exists in that exact version's documentation, and re-run steps per dependency at point of use for version-sensitive behavior.

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
Claude Code MUST NOT skip or defer verification. All referral operations must route through the centralized domain module within an authenticated actor context, verified by automated lints, boundary rules, peer reviews, and CI pipelines.
</enforcement>