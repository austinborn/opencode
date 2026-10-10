# Effect Functional Effect System Adoption in Core Package: Asynchronous Multi Step Workflows Composed Generator

These rules are ALWAYS ACTIVE for all core domain services and stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations.

### Rules

- **R-EFF-001** MUST: Asynchronous multi-step workflows MUST be composed using generator-based effect functions or functional piping combinators rather than unmanaged promise chains.
- **R-EFF-002** MUST: Structure multi-step operations using generator-based effect flows to maintain legible sequential execution.
- **R-EFF-003** MUST: Enclose background operations in explicit runtime scopes using fiber forking combinators to prevent orphan background execution.
- **R-EFF-004** MUST: Isolate external network requests behind dedicated client wrappers and intercept execution causes before exposing data to callers.

### Verify

```bash
# Discover and execute the build and test orchestration scripts from the project manifest
# Discover and execute workspace type-checking from the project configuration
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and lint checks executed during CI, as well as peer architectural code reviews, enforce these rules. Pull requests introducing unmanaged asynchronous primitives or bypassed effect lifecycles within core modules will be blocked.
</enforcement>