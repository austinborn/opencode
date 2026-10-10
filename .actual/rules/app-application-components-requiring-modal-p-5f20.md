# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Application Components Requiring Modal Presentation Dialog

These rules are ALWAYS ACTIVE for all application components requiring modal presentation, dialog state coordination, or overlay lifecycle triggers.

### Rules

- **R-DIALOG-001** MUST: All application components requiring modal presentation, dialog state coordination, or overlay lifecycle triggers MUST import and consume dialog context exclusively through @opencode-ai/ui/context/dialog.

### Verify

```bash
# Discover and execute workspace static analysis to verify dialog imports
# Discover and execute project test runner script to validate dialog context consumption
```

**Accept when:**
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>