# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: Modules Performing Binary Encoding Decoding Byte

These rules are ALWAYS ACTIVE for modules performing binary encoding, decoding, or byte-level buffer manipulation (including client state synchronization modules, message event reducers, and session management contexts).

### Rules

- **R-BIN-001** MUST: Modules performing binary encoding, decoding, or byte-level buffer manipulation MUST import and utilize the centralized @opencode-ai/core/util/binary module rather than introducing custom binary manipulation routines.

### Verify

```bash
# Discover the project test runner configuration and execute the unit and integration test suites covering synchronization modules.
# Discover the static analysis and linting scripts from the repository configuration and verify that all import statements conform to internal module conventions.
```

**Accept when:**
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced by automated continuous integration checks executing static analysis and test validation, and peer code review.
</enforcement>