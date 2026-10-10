# @playwright/test Event-Driven Page Lifecycle Tracking: Navigation Event Handlers Registered Framenavigated Store

These rules are ALWAYS ACTIVE for automated end-to-end browser performance benchmarks requiring frame navigation timing and runtime diagnostics collection, and test harness fixtures managing page lifecycle event subscriptions.

### Rules

- **R-NAV-001** MUST: All navigation event handlers registered on the framenavigated event MUST store collected diagnostics in an isolated context mapped to the active page instance.

### Verify

```bash
# Discover and run the repository test execution script for the automated end-to-end performance benchmarking suite.
# Discover and execute the repository static analysis and linting scripts to verify compliance with fixture lifecycle cleanup standards.
```

**Accept when:**
- All automated test suites for browser performance benchmarking execute and pass without reporting listener memory leaks.
- Diagnostic caches accurately record navigation timing and lifecycle events for all observed page transitions.
- Static analysis and lint suites confirm all page lifecycle event listeners have registered teardown handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration checks and architecture/peer code reviews.
</enforcement>