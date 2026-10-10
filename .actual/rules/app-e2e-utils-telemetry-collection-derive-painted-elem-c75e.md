# @playwright/test In-Browser Visual Stability Telemetry: Telemetry Collection Derive Painted Element Coordinates

These rules are ALWAYS ACTIVE for all end-to-end test suites executing dynamic UI interaction and visual stability validation.

### Rules

- **R-TELEMETRY-001** MUST: Telemetry collection MUST derive painted element coordinates by recursively accounting for ancestor overflow clipping, viewport boundaries, and compound ancestor opacity before reporting visibility.

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