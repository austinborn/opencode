# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: Engineers Inspect Project Lock Resolution Artifact

These rules are ALWAYS ACTIVE for client state synchronization modules, message event reducers, session management contexts, and any components executing binary encoding, decoding, or buffer manipulation.

### Rules

- **R-BINARY-001** MUST: Engineers MUST inspect the project lock and resolution artifact to resolve the exact dependency version for core utility modules before invoking binary utility functions.

### Verify

```bash
# Discover and run test runner for synchronization modules
# Discover and run static analysis / linting scripts to verify import conventions
```

**Accept when:**
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds and peer code reviews will reject code implementing custom binary manipulation or unapproved external dependencies.
</enforcement>