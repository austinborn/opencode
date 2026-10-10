# @playwright/test In-Page Performance Probes and Benchmark Telemetry: Consumers Discover Project Dependency Manifest Lock

These rules are ALWAYS ACTIVE for all end-to-end performance benchmark specifications, rendering regression test suites, and browser-based navigation timing, layout stability, and repaint verification fixtures.

### Rules

- **R-PLAYWRIGHT-001** MUST: Consumers MUST discover the project dependency manifest and lock resolution artifact to identify the exact resolved version of the browser automation framework before implementation.

### Verify

```bash
# Discover the repository test configuration and run the performance benchmark test suite in verification mode
# Inspect the project lock artifact to verify that the browser automation framework dependency matches the committed resolution
```

**Accept when:**
- All end-to-end benchmark test suites execute without unhandled probe rejections or browser context timeouts.
- Performance marks, layout shift samples, and mutation records collected via in-page evaluation probes conform to declared telemetry schemas.
- Resolved versions of the browser testing framework match the authoritative lock artifact.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>