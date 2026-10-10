# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Codebase Adopt Playwright Test Standard Framework

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, and visual stability probes.

### Rules

- **R-PW-001** MUST: The codebase MUST adopt @playwright/test as the standard framework for browser automation, session management, and end-to-end test verification.

### Verify

```bash
# Discover the end-to-end test execution target in the workspace configuration and run the browser verification suite.
# Discover and run the project type-checking and linting verification scripts to validate test utility signatures.
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by continuous integration test execution pipelines and automated static analysis is mandatory.
</enforcement>