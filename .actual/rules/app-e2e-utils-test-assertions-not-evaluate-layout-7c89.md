# @playwright/test In-Browser Visual Stability Telemetry: Test Assertions Not Evaluate Layout Stability

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-PLAYWRIGHT-001** MUST_NOT: Test assertions MUST NOT evaluate layout stability against unadjusted raw element coordinates without normalizing against container scroll position and viewport bounds.

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