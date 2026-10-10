# Adoption of @clack/prompts for Interactive CLI Workflows and Terminal Messaging: Non Interactive Automated Scripts Machine Readable

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLACK-001** MAY: Non-interactive automated scripts or machine-readable output formatters MAY bypass interactive prompt abstractions when operating in headless or piped streaming contexts.

### Verify

```bash
# Discover and execute repository project verification script
# Execute repository static analysis and linting command configured in project manifest
```

**Accept when:**
- Interactive command handlers and developer scripts route terminal feedback through the adopted interactive prompt library without direct standard console stream calls.
- The project build and verification suite completes with zero exit code and no lint violations regarding terminal logging conventions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by continuous integration static analysis checks and peer code review.
</enforcement>