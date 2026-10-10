# Internal invariant Module for Runtime Assertion and Contract Validation: Developers Inspect Repository Dependency Manifest Lock

These rules are ALWAYS ACTIVE for all end-to-end visual stability testing utilities, analyzers, and reporting modules.

### Rules

- **R-INV-001** MUST: Developers MUST inspect the repository dependency manifest and lock artifact to verify resolved versions of all runtime and test dependencies prior to integrating modules with the internal invariant utility.

### Verify

```bash
# Discover and run the project test suite command targeting visual stability utilities
# Discover and run the repository linter command to ensure invariant imports adhere to module boundary rules
```

**Accept when:**
- Visual stability test utility modules pass all automated test suites with invariant contracts verified.
- Precondition violations in test utilities consistently trigger structured invariant errors with informative diagnostics.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>