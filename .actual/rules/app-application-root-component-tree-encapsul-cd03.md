# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: Application Root Component Tree Encapsulate User

These rules are ALWAYS ACTIVE for frontend interface components, root layout trees rendering user-facing views, and shared UI context consumers including modal, dialog, and file management interfaces.

### Rules

- **R-THEME-001** MUST: The application root component tree MUST encapsulate all user interface views within the ThemeProvider component exported by @opencode-ai/ui.

### Verify

```bash
# Discover and run the workspace test execution script for frontend tests
# Discover and run the static analysis script
# Discover and run the application build script
```

**Accept when:**
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI, static analysis, and PR peer review.
</enforcement>