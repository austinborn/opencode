# @playwright/test Event-Driven Page Lifecycle Tracking: Benchmark Execution Settings Such Trace Flags

These rules are ALWAYS ACTIVE for automated end-to-end browser performance benchmarks requiring frame navigation timing, runtime diagnostics collection, and test harness fixtures managing page lifecycle event subscriptions.

### Rules

- **R-ADR-001** SHOULD: Benchmark execution settings such as trace flags and run identifiers SHOULD be resolved through external runtime configuration sources rather than hardcoded in test scripts.

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
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing ad-hoc polling or unmanaged navigation listeners will fail peer review and automated compliance checks. Violations must be refactored to register standard lifecycle listeners with coordinated diagnostic storage.
</enforcement>