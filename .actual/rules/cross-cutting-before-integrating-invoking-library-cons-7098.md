# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Before Integrating Invoking Library Consumers Resolve

These rules are ALWAYS ACTIVE for all interactive CLI command entry points, subcommands, and developer environment initialization or maintenance scripts interacting with terminal operators.

### Rules

- **R-CLACK-001** MUST: Before integrating or invoking library APIs, consumers MUST resolve the exact pinned library version from the project dependency resolution artifact and verify API availability against the corresponding documentation.
- **R-CLACK-002** MUST: Encapsulate user-facing terminal interactions using the prompt library's logging functions for informational, warning, and error states.
- **R-CLACK-003** MUST: Ensure interactive prompt routines account for terminal interrupt signals and cancellation workflows, returning structured cancellation states.

### Verify

```bash
# Discover and execute the repository project verification script
# (Command must be derived from the project repository manifests and scripts)
```

**Accept when:**
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory for all changes touching CLI command execution modules and terminal interaction scripts.
</enforcement>