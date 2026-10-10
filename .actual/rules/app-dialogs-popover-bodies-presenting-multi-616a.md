# Adoption of @opencode-ai/ui/tabs for Tabbed Interface Navigation: Dialogs Popover Bodies Presenting Multi Section

These rules are ALWAYS ACTIVE for all user interface components, settings dialogs, terminal panels, and status popovers within the frontend application requiring tabbed or multi-panel view switching.

### Rules

- **R-TABS-001** SHOULD: Dialogs and popover bodies presenting multi-section configuration views SHOULD delegate section switching to the shared tab component to maintain cohesive styling and accessibility interactions.

### Verify

```bash
# Discover and execute the project test runner covering UI components
# Discover and execute the repository static analysis script to verify import boundaries
# Execute the project type-checking script
```

**Accept when:**
- All tabbed UI panels and dialog views instantiate their navigation structure using the shared tab module.
- Static analysis and dependency verification scripts complete without import boundary violations or missing module references.
- All component test suites and type-checking scripts pass without errors or regressions.

<enforcement>
Verified by automated continuous integration checks executing repository lint and module import boundary rules, and architectural peer code reviews. Claude Code MUST NOT skip or defer verification.
</enforcement>