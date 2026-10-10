# @playwright/test Event-Driven Page Lifecycle Tracking: Performance Test Fixtures Deregister Navigation Event

These rules are ALWAYS ACTIVE for automated end-to-0nd browser performance benchmarks requiring frame navigation timing and runtime diagnostics collection, as well as test harness fixtures managing page lifecycle event subscriptions.

### Rules

- **R-NAV-001** MUST: Performance test fixtures MUST deregister navigation event listeners and clear associated page diagnostics upon completion of each test execution.

### Verify

```bash
# Discover the repository test execution script and run the automated end-to-end performance benchmarking suite.
# Discover and execute the repository static analysis and linting scripts to verify compliance with fixture lifecycle cleanup standards.
```

**Accept when:**
- All automated test suites for browser performance benchmarking execute and pass without reporting listener memory leaks.
- Diagnostic caches accurately record navigation timing and lifecycle events for all observed page transitions.
- Static analysis and lint suites confirm all page lifecycle event listeners have registered teardown handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing ad-hoc polling or unmanaged navigation listeners will fail compliance checks.
</enforcement>