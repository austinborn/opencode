# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Test Outcome Validations Assertions Use Playwright

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, visual stability probes, and browser automation scripts requiring low-level protocol sessions or in-page script evaluation.

### Rules

- **R-E2E-001** MUST: Test outcome validations and assertions MUST use the @playwright/test expect API or domain-specific invariants built upon framework assertions.

### Verify

```bash
# Discover the end-to-end test execution target in the workspace configuration and run the browser verification suite.
# Discover and run the project type-checking and linting verification scripts to validate test utility signatures.
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pipelines enforce test pass criteria, static analysis, and code review checks verify import consistency.
</enforcement>