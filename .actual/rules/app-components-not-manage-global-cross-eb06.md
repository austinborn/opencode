# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Components Not Manage Global Cross Component

These rules are ALWAYS ACTIVE for user interface components and views that present, trigger, or coordinate dialog overlays, as well as Storybook documentation and isolated component fixture definitions rendering dialog interactions.

### Rules

- **R-DIA-001** MUST_NOT: Components MUST NOT manage global or cross-component modal visibility through ad-hoc localized boolean states or uncoordinated window events.
- **R-DIA-002** MUST: Wrap client root components with the dialog context provider to establish the shared overlay lifecycle context before rendering consumer views.
- **R-DIA-003** MUST: When testing dialog-dependent components in isolation, configure test harnesses with mock context implementations matching the public interface of the shared dialog context module.

### Verify

```bash
# Discover the workspace static analysis script from repository configuration and execute it to verify that dialog imports originate from @opencode-ai/ui/context/dialog.
# Locate the repository test runner script through project manifests and run component test suites to validate dialog context consumption.
```

**Accept when:**
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks fail when direct or uncoordinated modal visibility state is detected.
</enforcement>