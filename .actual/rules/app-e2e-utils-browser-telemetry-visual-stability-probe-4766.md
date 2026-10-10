# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Browser Telemetry Visual Stability Probes Injected

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, and visual stability probes.

### Rules

- **R-BRW-001** SHOULD: In-browser telemetry and visual stability probes SHOULD be injected using the page.evaluate API to capture runtime frame measurements.

### Verify

```bash
# Discover and run the end-to-end test execution target in the workspace configuration
# Discover and run the project type-checking and linting verification scripts
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines enforce test pass criteria and static analysis checks.
</enforcement>