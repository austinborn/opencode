# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Components Subscribing Realtime Session Notifications Register

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-OPENCEN-001** SHOULD: Components subscribing to realtime session notifications SHOULD register typed handlers through the standard event mechanism provided by @opencode-ai/sdk/v2.

### Verify

```bash
# Discover and run dependency verification suite, static analysis/type checking, and test harness
npm run test
npm run typecheck
```

**Accept when:**
- Static analysis and workspace type verification pass without unresolved module specifiers or interface mismatches against @opencode-ai/sdk/v2.
- Dependency validation verifies that all application references to @opencode-ai/sdk/v2 adhere strictly to the repository lock resolution.
- All session model and event subscription test suites execute cleanly against the standardized interface implementations.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing unmediated network calls or unauthorized interface duplicates will fail automated build gates and must be refactored to consume @opencode-ai/sdk/v2.
</enforcement>