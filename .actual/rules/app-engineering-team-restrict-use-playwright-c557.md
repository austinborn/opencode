# @playwright/test Integration Testing and Lifecycle Probing: Engineering Team Restrict Use Playwright Test

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-PLAYWRIGHT-001** MUST: Restrict the use of @playwright/test to dedicated end-to-end and integration performance probing environments rather than embedding test harness abstractions inside production application UI components.
- **R-PLAYWRIGHT-002** MANDATORY: Execute lock-version grounding before writing code that uses a versioned library (find manifest, identify build tool, inspect lock/resolution artifact, look up official documentation, confirm API existence, re-run per dependency at point of use).

### Verify

```bash
# Discover and run the project test runner for end-to-end integration and performance suites.
# Execute the repository code quality and static analysis scripts to verify test boundary separation.
```

**Accept when:**
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing test runner dependencies into production UI components will be blocked, and invocations failing lock version verification must be corrected prior to merging.
</enforcement>