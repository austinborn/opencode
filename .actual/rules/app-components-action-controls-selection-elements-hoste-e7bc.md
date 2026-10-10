# Adoption of @opencode-ai/ui/dialog Module: Action Controls Selection Elements Hosted Within

These rules are ALWAYS ACTIVE for all application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs.

### Rules

- **R-DIALOG-001** SHOULD: Action controls and selection elements hosted within modal dialog bodies SHOULD compose primitives from the shared design system module alongside @opencode-ai/ui/dialog.
- **R-DIALOG-002** MANDATORY: Modal dialog components MUST encapsulate dialog visibility triggers and body layout while delegating overlay rendering and context propagation to @opencode-ai/ui/dialog and @opencode-ai/ui/context/dialog.
- **R-DIALOG-003** MANDATORY: All dialog instances MUST manage focus restoration gracefully upon close, returning active focus to the triggering element.
- **R-DIALOG-004** MANDATORY: Before writing code that uses a versioned library, the consumer MUST follow the lock-version grounding process (find manifest, identify build tool, inspect lock/resolution artifact, look up official docs for that exact version, confirm APIs exist, re-run per dependency at point of use).

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify modal imports
# Discover and execute the project test suite to validate modal interaction behavior and accessibility
```

**Accept when:**
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks in CI pipelines and peer review of pull requests.
</enforcement>