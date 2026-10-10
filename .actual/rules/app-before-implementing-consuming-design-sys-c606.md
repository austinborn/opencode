# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: Before Implementing Consuming Design System Components

These rules are ALWAYS ACTIVE for frontend interface components, root layout trees, and shared UI context consumers including modal, dialog, and file management interfaces.

### Rules

- **R-THEME-001** MUST: Before implementing or consuming design system components, the engineering team MUST discover the repository dependency manifest and resolution artifact to resolve the exact locked version of @opencode-ai/ui and verify exported APIs against version-specific documentation.
- **R-THEME-002** MUST: Ensure the ThemeProvider is mounted near the root of the rendering tree before any components consuming design system tokens or context dialogs are instantiated.
- **R-THEME-003** MUST: Compose auxiliary UI context providers as immediate descendants of the ThemeProvider to maintain access to theme-aware styling within overlay containers.

### Verify

```bash
# Discover and run the workspace test execution script from the repository manifest
# Discover and execute the repository static analysis script
# Discover and run the application build script from the project manifest
```

**Accept when:**
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration will fail for unverified design system dependency updates or missing provider structures.
</enforcement>