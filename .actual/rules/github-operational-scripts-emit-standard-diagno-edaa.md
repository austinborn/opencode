# Standard Runtime Console Logging: Operational Scripts Emit Standard Diagnostic Alerts

These rules are ALWAYS ACTIVE for automation scripts and workflow integration entrypoints executing in runtime environments without dedicated structured telemetry agents.

### Rules

- **R-LOG-001** MUST: Operational scripts MUST emit standard diagnostic alerts using console error and warning channels when handling unrecoverable exceptions or execution fallbacks.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute it to run the automated test suite.
# Discover and run the project static analysis and linting script to ensure console usage adheres to repository style policies.
```

**Accept when:**
- The automated test suite runs and passes all test assertions for error handling and fallback execution branches.
- Static analysis confirms that no sensitive tokens or secrets are passed into console logging statements.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline executing repository test and lint checks, and peer code review.
</enforcement>