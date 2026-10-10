# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Browser Control Automation Workflows Utilize Playwright

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, visual stability probes, and browser automation scripts requiring low-level protocol sessions or in-page script evaluation.

### Rules

- **R-PLAYWRIGHT-001** MUST: Browser control and automation workflows MUST utilize @playwright/test Page and CDPSession primitives for interacting with browser targets.

### Verify

```bash
# Discover and execute the end-to-end test execution target in the workspace configuration
# Discover and run the project type-checking and linting verification scripts
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution pipelines enforce test pass criteria, and automated static analysis/code review checks verify import consistency.
</enforcement>