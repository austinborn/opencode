# Effect Functional Effect System Adoption in Core Package: Consumers Inspect Repository Lock Artifact Determine

These rules are ALWAYS ACTIVE for all core domain services, stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations, and internal operational flows performing resource caching, background refresh, and asynchronous state synchronization.

### Rules

- **R-EFF-001** MUST: Consumers MUST inspect the repository lock artifact to determine the exact resolved version of the Effect library before writing or updating effect-dependent code.

### Verify

```bash
# Discover and execute project build and test orchestration scripts for core package modules
# Discover workspace type-checking command from project configuration and verify compilation
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and lint checks executed during continuous integration workflows, along with peer architectural code reviews, enforce these standards. Pull requests introducing unmanaged asynchronous primitives or bypassed effect lifecycles within core modules will be blocked.
</enforcement>