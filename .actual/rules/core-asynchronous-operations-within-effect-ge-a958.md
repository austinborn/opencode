# Effect Library Adoption for Core Asynchronous Workflow Orchestration: Asynchronous Operations Within Effect Generator Workflows

These rules are ALWAYS ACTIVE for all asynchronous workflows, background execution, and state finalization routines within core domain services, including modules responsible for reference materialization, session lifecycle, and asynchronous interaction requests.

### Rules

- **R-EFF-001** MUST: Asynchronous operations within effect generator workflows that require error recovery or logging MUST handle failures using Effect.catchCause rather than unhandled exception propagation.

### Verify

```bash
# Discover and run the project type-checking script across core packages
# Discover and execute the project automated test suite
# Discover and run the project code quality and linting verification scripts
```

**Accept when:**
- The project type-checking verification script completes with zero type errors across all core package modules.
- All unit and integration tests covering effect-driven workflows and background fiber execution execute successfully.
- Static verification scripts confirm that background operations are properly scoped and handled with appropriate effect error combinators.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>