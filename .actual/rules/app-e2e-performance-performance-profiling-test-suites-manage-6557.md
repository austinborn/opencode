# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Performance Profiling Test Suites Manage Low

These rules are ALWAYS ACTIVE for performance benchmarking and trace capture suites integrating with real-time browser runtime protocols and test infrastructure managing browser sessions and real-time page navigation lifecycle subscriptions.

### Rules

- **R-CDP-001** MUST: Performance profiling test suites MUST manage low-level browser instrumentation boundaries through framework protocol sessions (`CDPSession`) and page event-driven subscriptions rather than injecting external profiling agents into application code.

### Verify

```bash
# Discover the repository test runner script and execute the performance benchmark test suite.
# Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.
```

**Accept when:**
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>