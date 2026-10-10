# Internal cmd Module Adoption for CLI Command Definitions: Command Implementations Declare Specific Schema Validation

These rules are ALWAYS ACTIVE for all command definition modules and subcommands implemented in the command-line interface package.

### Rules

- **R-CMD-001** MAY: Command implementations MAY declare command-specific schema validation and utility helpers within their respective domain modules while adhering to the core command interface.

### Verify

```bash
# Discover the project's test runner script from the repository manifest and execute command-module unit and integration suites.
# Discover and run the project's linter and type-checker to verify module boundary compliance across command handlers.
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration static analysis checks and pull request architectural code reviews.
</enforcement>