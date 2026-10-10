# Adoption of @opencode-ai/ui/v2/dialog-v2 for Modal Dialog Components: Components Implementing Modal Overlays Dialog Windows

These rules are ALWAYS ACTIVE for all components implementing modal overlays, dialog windows, or prompt surfaces.

### Rules

- **R-DLG-001** MUST: Components implementing modal overlays, dialog windows, or prompt surfaces MUST import and use @opencode-ai/ui/v2/dialog-v2 as their foundational dialog primitive.

### Verify

```bash
echo "Discover and execute project static analysis checks to verify @opencode-ai/ui/v2/dialog-v2 imports across dialog components"
echo "Discover and execute project test runner to validate modal dialog lifecycle and interaction behaviors"
```

**Accept when:**
- All modal dialog components import and use @opencode-ai/ui/v2/dialog-v2 as their foundational overlay primitive.
- Project static analysis and component verification test suites execute successfully without import or structural violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via static analysis checks and peer code review.
</enforcement>