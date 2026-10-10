# Adoption of @opencode-ai/ui/dialog Module: Modal Dialog Components Not Instantiate Separate

These rules are ALWAYS ACTIVE for all application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs, as well as shared UI component libraries providing modal presentation primitives.

### Rules

- **R-MODAL-001** MUST_NOT: Modal dialog components MUST NOT instantiate separate overlay backdrops, custom focus traps, or custom escape-key listeners outside the @opencode-ai/ui/dialog module abstraction.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify that all modal dialog components import dialog primitives exclusively from the shared UI module.
# Discover and execute the project test suite to validate modal interaction behavior, rendering, and accessibility compliance.
```

**Accept when:**
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks in CI pipelines and peer review of UI pull requests targeting modal components.
</enforcement>