# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Interactive Trigger Components Dispatch Dialog State

These rules are ALWAYS ACTIVE for user interface components and views that present, trigger, or coordinate dialog overlays, as well as Storybook documentation and isolated component fixture definitions that render dialog interactions.

### Rules

- **R-DIALOG-001** SHOULD: Interactive trigger components SHOULD dispatch dialog state modifications via the contextual methods provided by @opencode-ai/ui/context/dialog rather than instantiating detached dialog instances.

### Verify

```bash
# Discover the workspace static analysis script from repository configuration and execute it to verify that dialog imports originate from @opencode-ai/ui/context/dialog.
# Locate the repository test runner script through project manifests and run component test suites to validate dialog context consumption.
```

**Accept when:**
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>