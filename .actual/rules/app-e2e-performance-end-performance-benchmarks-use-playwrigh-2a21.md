# @playwright/test In-Page Performance Probes and Benchmark Telemetry: End Performance Benchmarks Use Playwright Test

These rules are ALWAYS ACTIVE for all end-to-end performance benchmark specifications and rendering regression test suites.

### Rules

- **R-E2E-001** MUST: End-to-end performance benchmarks MUST use @playwright/test test fixtures to coordinate browser lifecycle, navigation flows, and in-page diagnostic probes.

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