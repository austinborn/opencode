# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Components Presenting Multi Item Lists Command

These rules are ALWAYS ACTIVE for all application views, session list panels, and command palette dialogs requiring scrollable viewport management.

### Rules

- **R-SCROLL-001** MUST_NOT: Components presenting multi-item lists or command palettes MUST NOT apply unmanaged native overflow styles in place of @opencode-ai/ui/scroll-view.

### Verify

```bash
# Discover and run the project's static analysis and type verification script
# Discover and execute the project unit and component test suites
```

**Accept when:**
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis checks and peer review.
</enforcement>