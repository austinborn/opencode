# Adoption of @opencode-ai/ui/v2/dialog-v2 for Modal Dialog Components: Dialog Components Not Implement Custom Unmanaged

These rules are ALWAYS ACTIVE for all application view components presenting modal overlays, configuration prompts, selection panels, and command palettes.

### Rules

- **R-DIALOG-001** MUST_NOT: Dialog components MUST NOT implement custom unmanaged overlay containers, raw viewport backdrops, or divergent legacy modal primitives.

### Verify

```bash
# Discover and execute project static analysis checks to verify @opencode-ai/ui/v2/dialog-v2 imports across dialog components
# Discover and execute project test runner to validate modal dialog lifecycle and interaction behaviors
```

**Accept when:**
- All modal dialog components import and use @opencode-ai/ui/v2/dialog-v2 as their foundational overlay primitive.
- Project static analysis and component verification test suites execute successfully without import or structural violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>