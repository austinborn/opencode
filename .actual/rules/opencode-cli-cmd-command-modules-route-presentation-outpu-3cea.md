# Internal cmd Module Adoption for CLI Command Definitions: Command Modules Route Presentation Output Status

These rules are ALWAYS ACTIVE for all command definition modules and subcommands implemented in the command-line interface package.

### Rules

- **R-CMD-001** SHOULD: Command modules SHOULD route presentation output, status reporting, and user interactions through dedicated UI boundary adapters rather than direct standard output streams.

### Verify

```bash
# Discover and run the project's test runner, linter, and type-checker as defined in the repository manifest
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>