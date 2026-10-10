# Standard Runtime Console Logging: Engineers Include Actionable Context Regarding Failing

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-SRC-001** SHOULD: Engineers include actionable context regarding the failing operation or fallback destination when invoking console error or warning methods.
- **R-SRC-002** MANDATORY: Format error messages with descriptive failure context while passing the error instance directly to the error stream to preserve stack traces.
- **R-SRC-003** MANDATORY: Reserve console warning streams for non-fatal execution adjustments such as fallback selection when requested configurations are missing.
- **R-SRC-004** MANDATORY: Ensure error messages and interpolation arguments omit authorization headers and tokens to prevent accidental exposure of sensitive credentials.

### Verify

```bash
# Discover and execute the project verification script from the repository manifest
# Discover and run the project static analysis and linting script to ensure console usage adheres to repository style policies
```

**Accept when:**
- The automated test suite runs and passes all test assertions for error handling and fallback execution branches.
- Static analysis confirms that no sensitive tokens or secrets are passed into console logging statements.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test failures block pull request merge, and unvetted console logging requires remediation during peer review.
</enforcement>