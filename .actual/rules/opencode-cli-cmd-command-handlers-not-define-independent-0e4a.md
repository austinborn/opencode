# Internal cmd Module Adoption for CLI Command Definitions: Command Handlers Not Define Independent Entrypoint

These rules are ALWAYS ACTIVE for all command definition modules and subcommands implemented in the command-line interface package, as well as shared execution hooks and dispatch handlers for command line operations.

### Rules

- **R-CMD-001** MUST_NOT: Command handlers MUST NOT define independent entrypoint execution logic that bypasses the internal cmd module architecture.
- **R-CMD-002** MANDATORY: The consumer MUST discover tool names, file names, commands, package managers, and version numbers from the project repository.
- **R-CMD-003** MANDATORY: Follow the LOCK-VERSION GROUNDING procedure before writing code that uses a versioned library.
- **R-CMD-004** MANDATORY: Commands should define execution logic by implementing the standard contract exposed by the internal cmd module.
- **R-CMD-005** MANDATORY: Presentation, logging, and error messaging should delegate to UI boundary modules rather than inline console outputs.

### Verify

```bash
# Discover and run the project's test runner script from the repository manifest
# Discover and run the project's linter and type-checker to verify module boundary compliance across command handlers
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration static analysis checks, pull request architectural code reviews, and project verification suites must pass.
</enforcement>