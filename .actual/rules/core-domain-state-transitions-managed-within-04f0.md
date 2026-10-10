# Effect Library Adoption for Core Asynchronous Workflow Orchestration: Domain State Transitions Managed Within Effect

These rules are ALWAYS ACTIVE for asynchronous workflows, background execution, and state finalization routines within core domain services, including modules responsible for reference materialization, session lifecycle, and asynchronous interaction requests.

### Rules

- **R-EFF-001** SHOULD: Domain state transitions managed within effect workflows publish domain events using yield expressions within generator bodies upon successful operation finalization.

### Verify

```bash
# Discover and run the project type-checking script across core packages to ensure all effect types, error channels, and generator yields resolve correctly.
# Discover and execute the project automated test suite to confirm that asynchronous effect workflows, background fibers, and event publishing routines pass without regressions.
# Discover and run the project code quality and linting verification scripts to validate that asynchronous domain logic complies with architectural constraints.
```

**Accept when:**
- The project type-checking verification script completes with zero type errors across all core package modules.
- All unit and integration tests covering effect-driven workflows and background fiber execution execute successfully.
- Static verification scripts confirm that background operations are properly scoped and handled with appropriate effect error combinators.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipelines, peer architectural code reviews, and static analysis will reject non-compliant code.
</enforcement>