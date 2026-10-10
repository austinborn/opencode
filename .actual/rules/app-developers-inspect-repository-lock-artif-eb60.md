# Adoption of @opencode-ai/ui/v2/dialog-v2 for Modal Dialog Components: Developers Inspect Repository Lock Artifact Determine

These rules are ALWAYS ACTIVE for all application view components presenting modal overlays, configuration prompts, selection panels, and command palettes.

### Rules

- **R-DLG-001** MUST: Developers MUST inspect the repository lock artifact to determine the exact resolved version of the design system library before implementing or modifying dialog components.

### Verify

```bash
echo "Discover and execute project static analysis checks to verify @opencode-ai/ui/v2/dialog-v2 imports across dialog components"
echo "Discover and execute project test runner to validate modal dialog lifecycle and interaction behaviors"
```

**Accept when:**
- All modal dialog components import and use @opencode-ai/ui/v2/dialog-v2 as their foundational overlay primitive.
- Project static analysis and component verification test suites execute successfully without import or structural violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification of modal dialog primitive adoption and static analysis compliance is mandatory for all PRs introducing or modifying modal viewports.
</enforcement>