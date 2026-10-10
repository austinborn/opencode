# @playwright/test Event-Driven Page Lifecycle Tracking: Automated Performance Benchmark Fixtures Capture Browser

These rules are ALWAYS ACTIVE for automated end-to-end browser performance benchmarks requiring frame navigation timing and runtime diagnostics collection, as well as test harness fixtures managing page lifecycle event subscriptions.

### Rules

- **R-ADR-001** MUST: Automated performance benchmark fixtures MUST capture browser frame navigation lifecycles by registering event listeners through the @playwright/test page.on interface rather than employing synchronous polling loops.

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
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks executing the performance benchmark harness and architecture/peer code reviews.
</enforcement>