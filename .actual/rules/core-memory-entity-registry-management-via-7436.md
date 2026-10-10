# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Core Domain Entity Registries Implement Memory

These rules are ALWAYS ACTIVE for all core domain entity registries and in-memory state storage definitions.

### Rules

- **R-STATE-001** MUST: All core domain entity registries MUST implement in-memory state encapsulation exclusively through the State.create draft abstraction.

### Verify

```bash
# Discover and execute the project test runner for core domain state registries
# Discover and execute the project static type checker
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Static type analysis and automated test suites must pass without errors.
</enforcement>