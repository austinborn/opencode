# @playwright/test Integration Testing and Lifecycle Probing: Engineers Verify Resolved Version Playwright Test

These rules are ALWAYS ACTIVE for automated browser performance benchmarking scripts, synthetic evaluation probes, and end-to-end integration test suites involving testing framework dependencies.

### Rules

- **R-PLAYWRIGHT-001** MUST: Engineers MUST verify the resolved version of @playwright/test and any testing framework dependencies against the project lock artifact prior to introducing new integration test suites.

### Verify

```bash
# Discover and run the project test runner for end-to-end integration and performance suites.
# Execute the repository code quality and static analysis scripts to verify test boundary separation.
```

**Accept when:**
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline checks and peer code review.
</enforcement>