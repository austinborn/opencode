# Effect Library Adoption for Core Asynchronous Workflow Orchestration: Before Introducing Updating Dependencies Related Effect

These rules are ALWAYS ACTIVE for asynchronous workflows, background execution, and state finalization routines within core domain services, including modules responsible for reference materialization, session lifecycle, and asynchronous interaction requests.

### Rules

- **R-EFF-001** MUST: Before introducing or updating dependencies related to the effect library, developers MUST inspect the repository lock artifact to verify the exact resolved version and validate that referenced APIs exist within that documented version release.

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
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipelines and peer reviews enforce that core domain asynchronous operations use the adopted effect library idioms, and pull requests introducing raw unhandled promises or bypassing effect error combinators will be blocked.
</enforcement>