# Adoption of @opencode-ai/ui/tabs for Tabbed Interface Navigation: Interactive Tab Items Reordering Requirements Integrate

These rules are ALWAYS ACTIVE for all user interface components, settings dialogs, terminal panels, and status popovers within the frontend application requiring tabbed or multi-panel view switching.

### Rules

- **R-TABS-001** SHOULD: Interactive tab items with reordering requirements SHOULD integrate drag-and-drop sortable primitives directly with the tab layout provided by the shared component module.

### Verify

```bash
# Discover and run the project test runner covering UI components
# Discover and run the repository static analysis script verifying tabbed views import exclusively from the shared UI module
# Execute the project type-checking script to confirm full type compliance with shared tab interface definitions
```

**Accept when:**
- All tabbed UI panels and dialog views instantiate their navigation structure using the shared tab module.
- Static analysis and dependency verification scripts complete without import boundary violations or missing module references.
- All component test suites and type-checking scripts pass without errors or regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks execute repository lint and module import boundary rules. Pull requests introducing ad-hoc tab implementations or unapproved external tab libraries are blocked until refactored to use the shared module.
</enforcement>