# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Specialized Dialog Presentations Compose Additional Domain

These rules are ALWAYS ACTIVE for user interface components, views, and Storybook fixture definitions that present, trigger, or coordinate dialog overlays.

### Rules

- **R-DIA-001** MAY: Specialized dialog presentations MAY compose additional domain-specific state stores alongside the base dialog context provided by @opencode-ai/ui/context/dialog.
- **R-DIA-002** MANDATORY: Wrap client root components with the dialog context provider to establish the shared overlay lifecycle context before rendering consumer views.
- **R-DIA-003** MANDATORY: When testing dialog-dependent components in isolation, configure test harnesses with mock context implementations matching the public interface of @opencode-ai/ui/context/dialog.
- **R-DIA-004** MANDATORY (LOCK-VERSION GROUNDING): Before writing code that uses a versioned library, find the dependency manifest, identify the build tool, inspect the repository lock or resolution artifact to determine the exact resolved version, look up official documentation for that exact version, confirm every API exists in that version, and re-verify per dependency at point of use for version-sensitive behavior.

### Verify

```bash
# Discover and execute the workspace static analysis script to verify dialog imports originate from @opencode-ai/ui/context/dialog
# Locate the repository test runner script through project manifests and run component test suites to validate dialog context consumption
```

**Accept when:**
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>