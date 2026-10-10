# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Interactive Command Line Handlers User Facing

These rules are ALWAYS ACTIVE for all interactive CLI command entry points, subcommands, and developer environment initialization/maintenance scripts.

### Rules

- **R-CLACK-001** MUST: Interactive command-line handlers and user-facing terminal routines MUST use @clack/prompts for interactive prompts and console status messaging.

### Verify

```bash
# Discover and execute project verification and static analysis scripts to verify terminal messaging constraints
```

**Accept when:**
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>