# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: User Interface Components Consume Theming Values

These rules are ALWAYS ACTIVE for frontend interface components, root layout trees rendering user-facing views, and shared UI context consumers including modal, dialog, and file management interfaces.

### Rules

- **R-THEME-001** SHOULD: User interface components SHOULD consume theming values and design tokens exclusively through design system context abstractions rather than hardcoding presentation values.

### Verify

```bash
# Discover the workspace test execution script from the repository manifest and run the frontend test suite to verify ThemeProvider mounting and context provision.
# Discover the repository static analysis script and execute it to verify that UI components import theme abstractions according to architectural rules.
# Discover the application build script from the project manifest and run it to validate successful asset bundling and context compilation.
```

**Accept when:**
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration failure applies for unverified design system dependency updates or missing provider structures.
</enforcement>