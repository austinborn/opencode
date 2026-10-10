# Effect Functional Effect System Adoption in Core Package: Core Services Managing Asynchronous Operations Concurrent

These rules are ALWAYS ACTIVE for all core domain services, stateful infrastructure modules, and internal operational flows managing asynchronous workflows, concurrency, or background operations.

### Rules

- **R-EFF-001** MUST: Core services managing asynchronous operations, concurrent tasks, or state finalization MUST adopt the Effect library as their primary execution and composition runtime.
- **R-EFF-002** MANDATORY: Structure multi-step operations using generator-based effect flows to maintain legible sequential execution.
- **R-EFF-003** MANDATORY: Enclose background operations in explicit runtime scopes using fiber forking combinators to prevent orphan background execution.
- **R-EFF-004** MANDATORY: Isolate external network requests behind dedicated client wrappers and intercept execution causes before exposing data to callers.

### Verify

```bash
# Discover the repository build and test orchestration scripts from the project manifest and execute the test suite across core package modules.
# Discover the workspace type-checking command from the project configuration and verify that all effect-based type signatures compile without diagnostic errors.
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and lint checks, as well as peer architectural code reviews, enforce these rules. Violations will block pull requests and must be refactored prior to merge.
</enforcement>