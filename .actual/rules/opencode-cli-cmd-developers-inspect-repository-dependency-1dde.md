# Internal cmd Module Adoption for CLI Command Definitions: Developers Inspect Repository Dependency Manifest Authoritative

These rules are ALWAYS ACTIVE for all command definition modules and subcommands implemented in the command-line interface package.

### Rules

- **R-CMD-001** MUST: Developers MUST inspect the repository dependency manifest and authoritative lock artifact to verify the exact resolved versions of all dependencies before implementation.
- **R-CMD-002** MUST: Command-line interface commands MUST use the internal cmd module for structured lifecycle execution, consistent option resolution, and separation from user interface rendering.
- **R-CMD-003** MUST: Presentation, logging, and error messaging MUST delegate to UI boundary modules rather than inline console outputs.

### Verify

```bash
# Discover and run the project's test runner, linter, and type-checker from the repository manifest
# Example discovery:
# npm test / pytest / go test
# Run command-module unit and integration suites and module boundary compliance checks.
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests with command implementations that bypass the internal cmd module are blocked from merging.
</enforcement>