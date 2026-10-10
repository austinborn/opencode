# @playwright/test In-Page Performance Probes and Benchmark Telemetry: Milestone Detection Probes Implement Consecutive Frame

These rules are ALWAYS ACTIVE for all end-to-end performance benchmark specifications and rendering regression test suites involving browser-based navigation timing, layout stability, and repaint verification fixtures.

### Rules

- **R-PRF-001** SHOULD: Milestone detection probes SHOULD implement consecutive-frame streak thresholds to verify render stability before recording completion marks.

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