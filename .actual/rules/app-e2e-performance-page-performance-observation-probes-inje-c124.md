# @playwright/test In-Page Performance Probes and Benchmark Telemetry: Page Performance Observation Probes Injected Via

These rules are ALWAYS ACTIVE for all end-to-end performance benchmark specifications, rendering regression test suites, browser-based navigation timing, layout stability, and repaint verification fixtures.

### Rules

- **R-PERF-001** MUST: In-page performance observation probes MUST be injected via page evaluation hooks before initiating the target navigation or trigger interaction.

### Verify

```bash
# Discover the repository test configuration and run the performance benchmark test suite in verification mode.
# Inspect the project lock artifact to verify that the browser automation framework dependency matches the committed resolution.
```

**Accept when:**
- All end-to-end benchmark test suites execute without unhandled probe rejections or browser context timeouts.
- Performance marks, layout shift samples, and mutation records collected via in-page evaluation probes conform to declared telemetry schemas.
- Resolved versions of the browser testing framework match the authoritative lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>