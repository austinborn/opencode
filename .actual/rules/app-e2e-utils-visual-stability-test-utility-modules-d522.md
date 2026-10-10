# Internal invariant Module for Runtime Assertion and Contract Validation: Visual Stability Test Utility Modules Use

These rules are ALWAYS ACTIVE for all visual stability test utility modules, scenario runners, analyzers, and reporting components responsible for visual stability verification.

### Rules

- **R-INV-001** MUST: Visual stability test utility modules MUST use the internal invariant module to validate preconditions, state integrity, and data invariants before executing downstream analysis or reporting.

### Verify

```bash
# Discover and run the project test suite command targeting visual stability utilities to verify invariant assertions execute properly.
# Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules.
```

**Accept when:**
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution and automated lint checks verify compliance, and pull requests omitting invariant checks or using ad-hoc error throwing will be blocked.
</enforcement>