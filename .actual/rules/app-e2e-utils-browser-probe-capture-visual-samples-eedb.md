# @playwright/test In-Browser Visual Stability Telemetry: Browser Probe Capture Visual Samples Requestanimationframe

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-PROBE-001** MUST: The in-browser probe MUST capture visual samples using `requestAnimationFrame` and store telemetry in a window-scoped probe state that provides discrete lifecycle functions for initialization, marker tracking, and termination.

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