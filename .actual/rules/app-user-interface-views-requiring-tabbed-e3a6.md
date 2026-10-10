# Adoption of @opencode-ai/ui/tabs for Tabbed Interface Navigation: User Interface Views Requiring Tabbed Navigation

These rules are ALWAYS ACTIVE for all user interface components, settings dialogs, terminal panels, and status popovers within the frontend application requiring tabbed or multi-panel view switching.

### Rules

- **R-UI-TABS-001** MUST: User interface views requiring tabbed navigation, multi-panel switching, or tabbed session containers MUST use the shared internal module @opencode-ai/ui/tabs as their tab management component.
- **R-UI-TABS-002** MUST: Compose tab navigation triggers and tab content panels using the semantic slot structure provided by the internal UI package.
- **R-UI-TABS-003** MUST: Ensure active tab state transitions preserve reactive cleanup and disconnect event handlers or terminal session handles when tabs switch.

### Verify

```bash
# Discover and execute the project test runner covering UI components
# Discover the repository static analysis script and verify that tabbed views import exclusively from the shared UI module
# Execute the project type-checking script to confirm full type compliance with the shared tab interface definitions
```

**Accept when:**
- All tabbed UI panels and dialog views instantiate their navigation structure using the shared tab module.
- Static analysis and dependency verification scripts complete without import boundary violations or missing module references.
- All component test suites and type-checking scripts pass without errors or regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration checks and architectural code reviews. Pull requests introducing ad-hoc tab implementations or unapproved external tab libraries are blocked until refactored.
</enforcement>