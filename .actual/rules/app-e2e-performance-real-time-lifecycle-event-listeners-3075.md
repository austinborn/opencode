# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Real Time Lifecycle Event Listeners Registered

These rules are ALWAYS ACTIVE for performance benchmarking and trace capture suites integrating with real-time browser runtime protocols and test infrastructure managing browser sessions and real-time page navigation lifecycle subscriptions.

### Rules

- **R-CDP-001** MUST: Real-time lifecycle event listeners registered on a Page instance MUST be scoped to the lifetime of the active page and detached or discarded upon context closure to prevent memory leaks across benchmark iterations.

### Verify

```bash
# Discover the repository test runner script and execute the performance benchmark test suite.
# Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.
```

**Accept when:**
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline running performance benchmark suites and peer review of test suite configurations and telemetry session lifecycles.
</enforcement>