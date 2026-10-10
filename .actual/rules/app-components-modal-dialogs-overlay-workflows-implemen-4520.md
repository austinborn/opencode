# Adoption of @opencode-ai/ui/dialog Module: Modal Dialogs Overlay Workflows Implemented Shared

These rules are ALWAYS ACTIVE for all application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs.

### Rules

- **R-MOD-001** MUST: All modal dialogs and overlay workflows MUST be implemented using the shared @opencode-ai/ui/dialog module rather than ad-hoc window containers or native window primitives.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify that all modal dialog components import dialog primitives exclusively from the shared UI module.
# Discover and execute the project test suite to validate modal interaction behavior, rendering, and accessibility compliance.
```

**Accept when:**
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>