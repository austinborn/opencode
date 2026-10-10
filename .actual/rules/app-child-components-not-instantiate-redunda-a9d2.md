# Adoption of @opencode-ai/ui ThemeProvider for Application Theming: Child Components Not Instantiate Redundant Themeprovider

These rules are ALWAYS ACTIVE for all frontend interface components, root layout trees, and shared UI context consumers including modal, dialog, and file management interfaces.

### Rules

- **R-THEME-001** MUST_NOT: Child components MUST NOT instantiate redundant ThemeProvider wrappers unless establishing an explicitly isolated, scoped theme sub-tree.

### Verify

```bash
# Discover and run the workspace test execution script from the repository manifest to verify ThemeProvider mounting and context provision.
# Discover and execute the repository static analysis script to verify that UI components import theme abstractions according to architectural rules.
# Discover and run the application build script from the project manifest to validate successful asset bundling and context compilation.
```

**Accept when:**
- The root application component mounts ThemeProvider and renders child components without missing theme context errors.
- All automated component tests and static analysis verification scripts pass without errors.
- UI context providers for dialogs and files operate within the ThemeProvider boundary with full token resolution.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>