# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Terminal Logging State Indications Within Command

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLI-001** MUST: Terminal logging and state indications within command workflows MUST route status messages through @clack/prompts structured logging methods.

### Verify

```bash
# Discover and execute the repository project verification script to ensure all interactive command modules compile and adhere to terminal messaging constraints.
# Execute the repository static analysis and linting command configured in the project manifest to detect direct console invocations in command handlers.
```

**Accept when:**
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration static analysis checks verifying absence of direct console stream calls in interactive command modules are mandatory.
</enforcement>