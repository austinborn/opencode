# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Trace Output Destinations Run Identifiers Derived

These rules are ALWAYS ACTIVE for performance benchmarking and trace capture suites integrating with real-time browser runtime protocols and test infrastructure managing browser sessions and real-time page navigation lifecycle subscriptions.

### Rules

- **R-TR-001** SHOULD: Trace output destinations and run identifiers SHOULD be derived from runtime environment configurations to isolate test artifacts across concurrent execution runs.

### Verify

```bash
# Discover the repository test runner script and execute the performance benchmark test suite.
# Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.
```

**Accept when:**
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

<enforcement>
Claude Code MUST NOT skip or defer verification. All protocol session interactions must be wrapped in try-finally blocks or test fixtures that guarantee session closure and trace flushing.
</enforcement>