# Effect Functional Effect System Adoption in Core Package: Background Asynchronous Tasks Spawned During State

These rules are ALWAYS ACTIVE for all core domain services and stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations within the core package.

### Rules

- **R-EFF-001** MUST: Background asynchronous tasks spawned during state finalization or synchronization MUST be bound to a managed lifecycle scope using explicit fiber forking combinators.

### Verify

```bash
# Discover the repository build and test orchestration scripts from the project manifest and execute the test suite across core package modules.
# Discover the workspace type-checking command from the project configuration and verify that all effect-based type signatures compile without diagnostic errors.
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing unmanaged asynchronous primitives or bypassed effect lifecycles within core modules will be blocked during automated verification.
</enforcement>