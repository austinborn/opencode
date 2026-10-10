# @playwright/test CDP Session Real-Time Tracing and Lifecycle Integration: Before Implementing Updating Any Dependency End

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CDP-001** MUST: Before implementing or updating any dependency on the end-to-end testing framework, the consumer MUST inspect the repository lock artifact to determine the exact resolved dependency version and verify API compatibility against official documentation.
- **R-CDP-002** MUST: Wrap all protocol session interactions in try-finally blocks or test fixtures that guarantee session closure and trace flushing.
- **R-CDP-003** MUST: Verify protocol command compatibility against the resolved testing framework version per the Discovery Policy.
- **R-CDP-004** MUST: Bind page lifecycle event handlers prior to executing navigation actions and unbind or clean up references when disposing of page contexts.

### Verify

```bash
# Discover the repository test runner script and execute the performance benchmark test suite.
# Inspect generated trace artifacts to verify that real-time performance traces are created and properly formatted.
```

**Accept when:**
- Performance benchmark suites execute and collect browser traces without hanging or leaking active sessions.
- All real-time lifecycle event listeners and protocol sessions terminate cleanly upon test completion.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing unmanaged protocol sessions or leaking page event listeners will be blocked during code review and automated checks. Tests failing to release debugging sessions will fail automated hygiene verification.
</enforcement>