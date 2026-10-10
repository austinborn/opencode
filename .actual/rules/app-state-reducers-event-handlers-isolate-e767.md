# Adoption of @opencode-ai/core/util/binary for Binary Data Operations: State Reducers Event Handlers Isolate Binary

These rules are ALWAYS ACTIVE for all client state synchronization modules, message event reducers, session management contexts, and services executing binary encoding, decoding, or buffer manipulation.

### Rules

- **R-BIN-001** SHOULD: State reducers and event handlers isolate binary transformations to ingress and egress boundaries to keep core state update functions deterministic and serializable.

### Verify

```bash
# Discover and execute the project test runner configuration covering synchronization modules
# Discover and execute static analysis and linting scripts to verify import conventions
```

**Accept when:**
- All synchronization unit and integration test suites pass without binary serialization or decoding errors.
- Static analysis confirms zero redundant binary buffer implementations outside of the approved core utility module.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration checks and peer code review enforce adherence to centralized core utility imports and absence of ad-hoc buffer logic.
</enforcement>