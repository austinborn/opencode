# Adoption of @opentui/solid for Terminal User Interface Components: Specialized Keyboard Shortcut Extensions Utilize Opentui

These rules are ALWAYS ACTIVE for all interactive terminal user interface components, plugins, terminal screen navigation, and keybinding definitions.

### Rules

- **R-OTUI-001** MAY: Specialized keyboard shortcut extensions MAY utilize `@opentui/keymap/extras` where additional terminal key sequence translation is necessary.

### Verify

```bash
# Discover and execute the project test runner script defined in repository configuration
# Discover and execute the project static analysis and linting verification script
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and peer code reviews verify module imports and component structure against designated boundaries.
</enforcement>