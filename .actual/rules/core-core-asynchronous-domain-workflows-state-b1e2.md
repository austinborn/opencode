# Effect Library Adoption for Core Asynchronous Workflow Orchestration: Core Asynchronous Domain Workflows State Finalization

These rules are ALWAYS ACTIVE for all asynchronous workflows, background execution, and state finalization routines within core domain services, including modules responsible for reference materialization, session lifecycle, and asynchronous interaction requests.

### Rules

- **R-EFF-001** MUST: Core asynchronous domain workflows and state finalization routines MUST be constructed as generator-based effect programs utilizing the Effect.gen constructor from the adopted effect library.
- **R-EFF-002** MANDATORY: Discover the project dependency manifest, build tool, and lock/resolution artifact to determine exact resolved versions before using the effect library or version-sensitive APIs.
- **R-EFF-003** MANDATORY: When initiating background asynchronous tasks such as remote repository synchronization or cache warming, pipe the effect through Effect.catchCause for diagnostic logging and fork it into the ambient lifecycle scope using Effect.forkIn.

### Verify

```bash
# Discover and run type-checking across core packages
# (Command discovered from repository structure, e.g., pnpm --filter core typecheck)

# Discover and execute automated test suite for async effect workflows
# (Command discovered from repository structure, e.g., pnpm test)

# Discover and run code quality and linting verification scripts
# (Command discovered from repository structure, e.g., pnpm lint)
```

**Accept when:**
- The project type-checking verification script completes with zero type errors across all core package modules.
- All unit and integration tests covering effect-driven workflows and background fiber execution execute successfully.
- Static verification scripts confirm that background operations are properly scoped and handled with appropriate effect error combinators.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipelines enforce type validation, lint checks, and test suites, blocking pull requests that introduce raw unhandled promises or bypass effect error combinators in core workflows.
</enforcement>