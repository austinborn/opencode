# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: User Facing Cli Notification Warning Error

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLACK-001** MUST_NOT: User-facing CLI notification, warning, and error outputs MUST NOT use raw console streaming primitives when operating within interactive command contexts.

### Verify

```bash
# Discover and execute the repository project verification script and static analysis/linting command configured in the project manifest
# to verify absence of direct console stream calls in interactive command modules.
```

**Accept when:
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via continuous integration static analysis checks and peer code review.
</enforcement>