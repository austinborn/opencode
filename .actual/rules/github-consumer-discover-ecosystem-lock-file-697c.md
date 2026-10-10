# Standard Runtime Console Logging: Consumer Discover Ecosystem Lock File Verify

These rules are ALWAYS ACTIVE for all automation scripts and workflow integration entrypoints executing in runtime environments without dedicated structured telemetry agents.

### Rules

- **R-LOG-001** MUST: The consumer MUST discover the ecosystem lock file and verify resolved versions of all dependencies before implementation.

### Verify

```bash
# Discover and execute project verification/test suite and static analysis scripts from repository manifest
```

**Accept when:**
- The automated test suite runs and passes all test assertions for error handling and fallback execution branches.
- Static analysis confirms that no sensitive tokens or secrets are passed into console logging statements.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline executing repository test and lint checks and peer code review.
</enforcement>