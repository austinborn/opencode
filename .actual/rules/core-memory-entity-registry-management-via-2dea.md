# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Implementations State Create Supply Initial Factory

These rules are ALWAYS ACTIVE for all core domain services and in-memory entity registry management implementations.

### Rules

- **R-CORE-001** MUST: Implementations of State.create MUST supply an initial factory closure returning fresh collection instances for all defined entities.

### Verify

```bash
# Discover the project test runner and execute the core package unit test suite covering domain state registries.
# Discover the project static type checker and verify zero compilation errors across domain state modules.
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>