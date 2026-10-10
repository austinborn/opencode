# Internal invariant Module for Runtime Assertion and Contract Validation: Invariant Assertions Provide Clear Diagnostic Messages

These rules are ALWAYS ACTIVE for end-to-end testing utilities, analyzers, and reporting modules responsible for visual stability verification and internal data model access.

### Rules

- **R-INV-001** MUST: Invariant assertions MUST provide clear diagnostic messages that identify the specific contract failure to facilitate rapid root-cause isolation.

### Verify

```bash
# Discover and run the project test suite command targeting visual stability utilities to verify invariant assertions execute properly.
# Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules.
```

**Accept when:**
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration test execution and automated lint checks, and peer review during code changes affecting testing utilities and invariant modules.
</enforcement>