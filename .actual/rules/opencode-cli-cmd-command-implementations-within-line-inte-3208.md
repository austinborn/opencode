# Internal cmd Module Adoption for CLI Command Definitions: Command Implementations Within Line Interface Subsystem

These rules are ALWAYS ACTIVE for all command implementation modules and subcommands within the command-line interface package.

### Rules

- **R-CLI-001** MUST: All command implementations within the command-line interface subsystem MUST import and register through the internal cmd core module to standardize execution lifecycle and dispatch.

### Verify

```bash
# Discover and execute project test runner and linter/type-checker scripts from the repository manifest
# Example:
# npm test
# npm run lint
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration static analysis checks and architectural code reviews verify module import patterns across command files.
</enforcement>