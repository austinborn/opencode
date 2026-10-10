# Adoption of @opencode-ai/ui/dialog Module: Dialog State Management Across Composite Views

These rules are ALWAYS ACTIVE for all application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs.

### Rules

- **R-MOD-001** MUST: Dialog state management across composite dialog views MUST consume the @opencode-ai/ui/context/dialog module when coordinating modal open, close, and transition states.

### Verify

```bash
# Discover and run the project static analysis and linting scripts to verify modal dialog imports
npm run lint || pnpm lint || yarn lint

# Discover and execute the project test suite to validate modal interaction behavior
npm test || pnpm test || yarn test
```

**Accept when:**
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks in CI pipelines and peer review of user interface pull requests.
</enforcement>