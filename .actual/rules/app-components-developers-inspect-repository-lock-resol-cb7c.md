# Adoption of @opencode-ai/ui/dialog Module: Developers Inspect Repository Lock Resolution Artifact

These rules are ALWAYS ACTIVE for all application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs.

### Rules

- **R-DIALOG-001** MUST: Developers MUST inspect the repository lock or resolution artifact to verify the exact resolved version of workspace UI dependencies before authoring or modifying modal dialog implementations.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify modal dialog imports
# Discover and execute the project test suite to validate modal interaction behavior, rendering, and accessibility
```

**Accept when:**
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>