# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Test Implementations That Initiate Tracing Via

These rules are ALWAYS ACTIVE for performance benchmarking and trace capture suites integrating with real-time browser runtime protocols, and test infrastructure managing browser sessions and real-time page navigation lifecycle subscriptions.

### Rules

- **R-CDP-001** MUST: Test implementations that initiate tracing via a CDPSession MUST ensure that the tracing end command is executed and awaited during test teardown even if the underlying test execution fails.

### Verify

```bash
# Discover the repository test runner script and execute the performance benchmark test suite.
# Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.
```

**Accept when:**
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipeline running performance benchmark suites and peer review verify compliance. Violations will block pull requests.
</enforcement>