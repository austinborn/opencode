# @playwright/test In-Browser Visual Stability Telemetry: Before Authoring Updating Probe Consumers Developers

These rules are ALWAYS ACTIVE for end-to-end test suites executing dynamic UI interaction and visual stability validation, and in-browser telemetry probes executing via browser automation page evaluation APIs.

### Rules

- **R-PLAYWRIGHT-001** MUST: Before authoring or updating probe consumers, developers MUST discover the dependency manifest and inspect the authoritative repository lock file to verify the exact resolved version of `@playwright/test`.

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