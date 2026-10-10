# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Interactive Cli Prompts Requiring Confirmation Text

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLACK-001** SHOULD: Interactive CLI prompts requiring confirmation, text input, selection, or cancellation SHOULD utilize @clack/prompts prompt primitives to maintain consistent terminal styling and cancellation handling.

### Verify

```bash
# Discover and execute the project verification script and linter to ensure compliance
# Example discovery:
# npm test / npm run lint (derived from project repository manifest)
```

**Accept when:**
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration static analysis checks verifying absence of direct console stream calls in interactive command modules and peer code review for all new and modified CLI command implementations.
</enforcement>