# Adoption of @opencode-ai/ui/tabs for Tabbed Interface Navigation: Consumers Inspect Repository Dependency Manifest Authoritative

These rules are ALWAYS ACTIVE for all user interface components, settings dialogs, terminal panels, and status popovers within the frontend application requiring tabbed or multi-panel view switching.

### Rules

- **R-TABS-001** MUST: Consumers MUST inspect the repository dependency manifest and authoritative lock artifact to verify the exact resolved version and API contract of the internal UI module before implementation.

### Verify

```bash
# Discover the project test runner from the workspace manifest and execute the test suite covering UI components.
# Discover the repository static analysis script and verify that tabbed views import exclusively from the shared UI module.
# Execute the project type-checking script to confirm full type compliance with the shared tab interface definitions.
```

**Accept when:**
- All tabbed UI panels and dialog views instantiate their navigation structure using the shared tab module.
- Static analysis and dependency verification scripts complete without import boundary violations or missing module references.
- All component test suites and type-checking scripts pass without errors or regressions.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>