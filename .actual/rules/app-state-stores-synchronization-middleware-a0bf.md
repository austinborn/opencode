# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: State Stores Synchronization Middleware User Interaction

These rules are ALWAYS ACTIVE for client state synchronization modules, message event reducers, session management contexts, and components or services executing binary encoding, decoding, or buffer manipulation.

### Rules

- **R-BINARY-001** MUST_NOT: State stores, synchronization middleware, and user interaction components MUST NOT implement independent binary serialization helpers or ad-hoc buffer conversion wrappers.

### Verify

```bash
# Discover and execute unit and integration test suites covering synchronization modules
# Discover and execute static analysis and linting scripts to verify import conventions
```

**Accept when:**
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>