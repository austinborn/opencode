# @playwright/test Event-Driven Page Lifecycle Tracking: Before Implementing Updating Fixtures Relying Versioned

These rules are ALWAYS ACTIVE for automated end-to-end browser performance benchmarks requiring frame navigation timing, runtime diagnostics collection, and test harness fixtures managing page lifecycle event subscriptions.

### Rules

- **R-PLAYWRIGHT-001** MUST: Before implementing or updating fixtures relying on versioned browser automation dependencies, the consumer MUST inspect the repository lock artifact to determine the exact resolved dependency version and verify API compatibility against official documentation.
- **R-PLAYWRIGHT-002** MUST: Ensure diagnostic collections tied to browser page instances are scoped to the active test context and purged upon test fixture teardown.
- **R-PLAYWRIGHT-003** MUST: Configure navigation event handlers to execute asynchronously without blocking page rendering or subsequent navigation stages.

### Verify

```bash
# Discover and execute the repository test execution script for performance benchmarking
# Discover and execute the repository static analysis and linting scripts
```

**Accept when:**
- All automated test suites for browser performance benchmarking execute and pass without reporting listener memory leaks.
- Diagnostic caches accurately record navigation timing and lifecycle events for all observed page transitions.
- Static analysis and lint suites confirm all page lifecycle event listeners have registered teardown handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated CI checks, performance benchmark execution, and peer code review is mandatory.
</enforcement>