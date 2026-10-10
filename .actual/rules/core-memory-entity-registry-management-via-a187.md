# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Domain Services Requiring Post Mutation Side

These rules are ALWAYS ACTIVE for all core domain services requiring runtime in-memory caching and management of entity collections.

### Rules

- **R-STATE-001** SHOULD: Domain services requiring post-mutation side effects or event dispatches SHOULD implement the finalize hook within State.create to trigger execution pipelines.

### Verify

```bash
# Discover and execute the project test runner for the core package unit test suite covering domain state registries.
# Discover and execute the project static type checker to verify zero compilation errors across domain state modules.
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Static type analysis and automated unit/integration tests must pass without errors.
</enforcement>