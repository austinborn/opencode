# Standard Runtime Console Logging: Engineers Not Emit Sensitive Credential Parameters

These rules are ALWAYS ACTIVE for all automation scripts and workflow integration entrypoints executing in runtime environments without dedicated structured telemetry agents.

### Rules

- **R-SRC-001** MUST_NOT: Engineers MUST NOT emit sensitive credential parameters, authentication tokens, or private payload bodies into console diagnostic streams.

### Verify

```bash
# Discover and run the project static analysis and linting script to ensure console usage adheres to repository style policies.
# Discover the project verification script from the repository manifest and execute it to run the automated test suite.
```

**Accept when:**
- The automated test suite runs and passes all test assertions for error handling and fallback execution branches.
- Static analysis confirms that no sensitive tokens or secrets are passed into console logging statements.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration test failures and code review flags block pull request merges for unvetted console logging or token exposure.
</enforcement>