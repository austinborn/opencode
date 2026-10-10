# @playwright/test In-Browser Visual Stability Telemetry: End Visual Stability Instrumentation Adopt Playwright

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-VIS-001** MUST: End-to-end visual stability instrumentation MUST adopt `@playwright/test` using `page.evaluate` to inject an in-browser sampling probe rather than relying solely on static post-render screenshot comparisons.

### Verify

```bash
git grep -F "@playwright/test"
git grep -E "page\\.evaluate\\(.*__visualStabilityProbe"
```

**Accept when:**
- All end-to-end visual stability test suites execute and validate layout invariants against recorded probe samples without unhandled probe errors.
- Probe lifecycle methods properly initialize, sample, and terminate across all configured interaction scenarios.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>