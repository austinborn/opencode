# Adoption of @opentui/solid for Terminal User Interface Components: Interactive Navigation Shortcut Actions Registered Through

These rules are ALWAYS ACTIVE for interactive terminal user interface components, plugins, terminal screen navigation, and keybinding definitions.

### Rules

- **R-OPENTUI-001** MUST: Interactive navigation and shortcut actions MUST be registered through @opentui/keymap/solid command bindings rather than ad-hoc terminal input listeners.

### Verify

```bash
# Discover and execute the project test runner script defined in repository configuration.
# Discover and execute the project static analysis and linting verification script.
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>