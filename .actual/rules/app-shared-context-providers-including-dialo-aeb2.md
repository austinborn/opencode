# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: Shared Context Providers Including Dialog File

These rules are ALWAYS ACTIVE for frontend interface components, root layout trees, shared UI context consumers including modal, dialog, and file management interfaces.

### Rules

- **R-THEME-001** MUST: Shared UI context providers, including dialog and file contexts from @opencode-ai/ui/context, MUST be nested under the ThemeProvider hierarchy to guarantee consistent theme token availability.

### Verify

```bash
# Discover and run the workspace test execution script to verify ThemeProvider mounting and context provision.
# Discover the repository static analysis script and execute it to verify UI components import theme abstractions according to architectural rules.
# Discover the application build script from the project manifest and run it to validate successful asset bundling and context compilation.
```

**Accept when:**
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI test suites and static analysis rules.
</enforcement>