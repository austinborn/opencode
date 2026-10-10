# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Before Implementing Components That Depend Shared

These rules are ALWAYS ACTIVE for user interface components, views, and Storybook documentation that present, trigger, or coordinate dialog overlays.

### Rules

- **R-DIALOG-001** MUST: Before implementing components that depend on shared workspace UI packages, engineers MUST discover the workspace resolution artifact and verify the exact resolved version and API surface of @opencode-ai/ui/context/dialog.
- **R-DIALOG-002** MUST: Wrap client root components with the dialog context provider to establish the shared overlay lifecycle context before rendering consumer views.
- **R-DIALOG-003** MUST: When testing dialog-dependent components in isolation, configure test harnesses with mock context implementations matching the public interface of @opencode-ai/ui/context/dialog.

### Verify

```bash
# Discover the workspace static analysis script from repository configuration and execute it to verify that dialog imports originate from @opencode-ai/ui/context/dialog.
# Locate the repository test runner script through project manifests and run component test suites to validate dialog context consumption.
```

**Accept when:**
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

<enforcement>
Verification is mandatory. Claude Code MUST NOT skip or defer verification.
</enforcement>