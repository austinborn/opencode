# @playwright/test Integration Testing and Lifecycle Probing: Integration Test Fixtures Detach Custom Performance

These rules are ALWAYS ACTIVE for automated browser performance benchmarking scripts, end-to-end integration test suites, and synthetic evaluation probes measuring DOM rendering and timeline performance.

### Rules

- **R-INT-001** MAY: Integration test fixtures MAY detach custom performance observers upon benchmark completion to prevent memory retention during automated test execution.

### Verify

```bash
# Discover and run the project test runner for end-to-end integration and performance suites
# Execute repository code quality and static analysis scripts to verify test boundary separation
```

**Accept when:**
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>