# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: Modules Handling Binary Streams Compose Opencode

These rules are ALWAYS ACTIVE for all client state synchronization modules, message event reducers, session management contexts, and components executing binary encoding, decoding, or buffer manipulation.

### Rules

- **R-BIN-001** MAY: Modules handling binary streams MAY compose @opencode-ai/core/util/binary with core retry and encoding utilities when orchestrating networked synchronization tasks.

### Verify

```bash
# Discover the project test runner configuration and execute the unit and integration test suites covering synchronization modules
# Discover the static analysis and linting scripts from the repository configuration and verify that all import statements conform to internal module conventions
```

**Accept when:**
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>