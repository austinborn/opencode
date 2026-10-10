# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Scroll Position Tracking Within Scrollable Viewports

These rules are ALWAYS ACTIVE for all application views, session list panels, command palette dialogs, and components requiring scrollable viewport management.

### Rules

- **R-SCROLL-001** MUST: Scroll position tracking within scrollable viewports MUST propagate changes through the standard viewport scroll update mechanism provided by the container component.

### Verify

```bash
# Discover the project manifest, build tool, and test command, then run static analysis and tests:
# Example (discover from repo):
# npm run lint
# npm test
```

**Accept when:**
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced via automated static analysis checks in CI, peer reviews, and automated pipeline failures on unmanaged overflow container usage.
</enforcement>