# Adoption of @playwright/test for End-to-End Browser Automation and Testing: Engineers Resolve Exact Version Adopted Testing

These rules are ALWAYS ACTIVE for all end-to-end test suites, browser integration test utilities, visual stability probes, and browser automation scripts requiring low-level protocol sessions or in-page script evaluation.

### Rules

- **R-E2E-001** MUST: Engineers MUST resolve the exact version of the adopted testing framework from the repository dependency lock artifact before consuming or modifying framework APIs.

### Verify

```bash
# Discover and run the end-to-end test execution target in the workspace configuration
# Discover and run project type-checking and linting verification scripts
```

**Accept when:**
- The end-to-end test suite executes successfully across all configured browser targets.
- All visual stability probe modules type-check without errors against the resolved framework types.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>