# Adoption of @opencode-ai/ui/v2/dialog-v2 for Modal Dialog Components: Dialog State Transitions Visibility Lifecycles Coordinate

These rules are ALWAYS ACTIVE for all application view components presenting modal overlays, configuration prompts, selection panels, and command palettes.

### Rules

- **R-DIALOG-001** SHOULD: Dialog state transitions and visibility lifecycles SHOULD coordinate through the designated dialog context provider.

### Verify

```bash
echo "Discover and execute project static analysis checks to verify @opencode-ai/ui/v2/dialog-v2 imports across dialog components"
echo "Discover and execute project test runner to validate modal dialog lifecycle and interaction behaviors"
```

**Accept when:**
- All modal dialog components import and use @opencode-ai/ui/v2/dialog-v2 as their foundational overlay primitive.
- Project static analysis and component verification test suites execute successfully without import or structural violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>