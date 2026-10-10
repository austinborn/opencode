# @playwright/test In-Page Performance Probes and Benchmark Telemetry: Low Level Browser Tracing Managed Via

These rules are ALWAYS ACTIVE for all end-to-end performance benchmark specifications, rendering regression test suites, browser-based navigation timing, layout stability, and repaint verification fixtures.

### Rules

- **R-PERF-001** SHOULD: Low-level browser tracing MUST be managed via dedicated browser protocol session controllers that ensure trace acquisition is terminated and saved.
- **R-PERF-002** MANDATORY: Inject client-side probes via isolated evaluation contexts that attach mutation and performance observers prior to triggering user interaction events.
- **R-PERF-003** MANDATORY: Always encapsulate probe lifecycle state and provide an explicit stop method to disconnect DOM and performance observers before reading telemetry buffers.
- **R-PERF-004** MANDATORY: Coordinate browser protocol tracing sessions with harness lifecycle hooks to ensure trace buffers are cleanly terminated and persisted upon test completion.

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
Claude Code MUST NOT skip or defer verification. Continuous integration execution failure on unhandled probe exceptions or benchmark stability assertion timeouts, and pull request blockage when performance telemetry fixtures omit proper observer teardown or CDP session closure.
</enforcement>