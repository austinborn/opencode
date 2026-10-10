# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Viewport Scroll Position Updates Handled Within

These rules are ALWAYS ACTIVE for all application views, session list panels, and command palette dialogs requiring scrollable viewport management.

### Rules

- **R-SCROLL-001** SHOULD: Viewport scroll position updates SHOULD be handled within local view or controller boundaries to isolate layout recalculation from unaffected ancestor components.

### Verify

```bash
# Discover and run the project static analysis and type verification script
# Discover and execute the project unit and component test suites
```

**Accept when:**
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis checks and peer review.
</enforcement>