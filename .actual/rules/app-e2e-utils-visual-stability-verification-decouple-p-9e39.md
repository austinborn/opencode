# @playwright/test In-Browser Visual Stability Telemetry: Visual Stability Verification Decouple Probe Execution

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-VIS-001** SHOULD: Visual stability verification decouple probe execution, region selector definitions, invariant evaluation, and reporting into separate modules.

### Verify

```bash
git grep -F "@playwright/test"
git grep -E "page\.evaluate\(.*__visualStabilityProbe"
```

**Accept when:**
- All end-to-end visual stability test suites execute and validate layout invariants against recorded probe samples without unhandled probe errors.
- Probe lifecycle methods properly initialize, sample, and terminate across all configured interaction scenarios.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>