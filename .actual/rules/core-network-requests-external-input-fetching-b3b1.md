# Effect Functional Effect System Adoption in Core Package: Network Requests External Input Fetching Within

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CORE-001** SHOULD: Network requests and external input fetching within core modules SHOULD use library-provided HTTP abstractions to ensure uniform cancellation and error reporting.
- **R-CORE-002** MANDATORY: Discover the dependency manifest, build tool, and lockfile to inspect the exact resolved version before writing code using a versioned library.
- **R-CORE-003** MANDATORY: Look up official documentation for the exact resolved version; do not use training-data recall.
- **R-CORE-004** MANDATORY: Structure multi-step operations using generator-based effect flows to maintain legible sequential execution.
- **R-CORE-005** MANDATORY: Enclose background operations in explicit runtime scopes using fiber forking combinators to prevent orphan background execution.
- **R-CORE-006** MANDATORY: Isolate external network requests behind dedicated client wrappers and intercept execution causes before exposing data to callers.

### Verify

```bash
# Discover and execute the project build and test orchestration scripts from the project manifest across core package modules
# Discover and verify workspace type-checking command from project configuration to ensure effect-based type signatures compile cleanly
```

**Accept when:**
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type-checking and lint checks enforce these rules, and violations will block pull requests.
</enforcement>