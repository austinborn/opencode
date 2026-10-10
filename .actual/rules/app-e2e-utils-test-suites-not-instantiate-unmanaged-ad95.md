# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Test Suites Not Instantiate Unmanaged Browser

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, visual stability probes, and browser automation scripts requiring low-level protocol sessions or in-page script evaluation.

### Rules

- **R-E2E-001** MUST_NOT: Test suites MUST_NOT instantiate unmanaged browser processes or secondary driver protocols outside the framework orchestration boundary.

### Verify

```bash
# Discover and execute the end-to-end test execution target in the workspace configuration
# (Command discovered from repository configuration)

# Discover and run project type-checking and linting verification scripts to validate test utility signatures
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution pipelines and automated static analysis enforce these rules.
</enforcement>