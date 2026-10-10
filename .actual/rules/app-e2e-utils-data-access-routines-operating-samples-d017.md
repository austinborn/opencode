# Internal invariant Module for Runtime Assertion and Contract Validation: Data Access Routines Operating Samples Viewports

These rules are ALWAYS ACTIVE for end-to-end testing utilities, analyzers, and reporting modules responsible for visual stability verification and internal data model access.

### Rules

- **R-E2E-001** SHOULD: Data access routines operating on samples, viewports, or markers SHOULD invoke invariant validation immediately after collection lookups when matching elements are mandatory.

### Verify

```bash
# Discover and run the project test suite command targeting visual stability utilities to verify invariant assertions execute properly.
# Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules.
```

**Accept when:**
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution, automated lint checks, and peer review verify compliance. Pull requests omitting invariant checks for required preconditions or using ad-hoc error throwing will be blocked until updated.
</enforcement>