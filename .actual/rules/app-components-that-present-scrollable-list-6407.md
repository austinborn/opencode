# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Components That Present Scrollable List Contents

These rules are ALWAYS ACTIVE for all application views, session list panels, and command palette dialogs requiring scrollable viewport management.

### Rules

- **R-SCROLL-001** MUST: Components that present scrollable list contents or dialog viewports MUST use @opencode-ai/ui/scroll-view as the container primitive.

### Verify

```bash
# Discover and run the project's static analysis and type verification script
# Discover and run the project's unit and component test suites
```

**Accept when:**
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated pipeline failures occur on unmanaged overflow container usage in view and dialog modules.
</enforcement>