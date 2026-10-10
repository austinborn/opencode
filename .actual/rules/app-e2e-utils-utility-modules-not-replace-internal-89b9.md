# Internal invariant Module for Runtime Assertion and Contract Validation: Utility Modules Not Replace Internal Invariant

These rules are ALWAYS ACTIVE for all visual stability testing utilities, analyzers, and reporting modules responsible for visual stability verification and internal data model access.

### Rules

- **R-UTIL-001** MUST_NOT: Utility modules MUST NOT replace internal invariant contract assertions with test runner expectation matchers when validating internal harness state or data model preconditions.

### Verify

```bash
# Discover and run the project test suite command targeting visual stability utilities to verify invariant assertions execute properly.
# Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules.
```

**Accept when:**
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test execution and automated lint checks enforce these rules, and pull requests omitting invariant checks or using ad-hoc error throwing will be blocked.
</enforcement>