# Internal cmd Module Adoption for CLI Command Definitions: Service Interactions Organizational Boundaries Invoked Within

These rules are ALWAYS ACTIVE for all command definition modules and subcommands implemented in the command-line interface package.

### Rules

- **R-CLI-001** SHOULD: Service interactions and organizational boundaries invoked within command handlers SHOULD execute through structured middleware wrappers coordinated by the core command architecture.

### Verify

```bash
# Discover and run the project's test runner, linter, and type-checker based on the repository manifest
# Example discovery pattern:
# 1. Inspect dependency manifest / scripts in package.json, Makefile, or equivalent
# 2. Run unit and integration test suites for the command module
# 3. Run static analysis / lint / type-check to verify module boundary compliance
```

**Accept when:**
- All command implementation modules successfully import and register via the internal cmd module.
- Project verification suites and static type checks pass without module boundary or contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>