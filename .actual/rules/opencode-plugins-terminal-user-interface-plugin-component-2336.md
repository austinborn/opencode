# Adoption of @opentui/solid for Terminal User Interface Components: Terminal User Interface Plugin Components Use

These rules are ALWAYS ACTIVE for all interactive terminal user interface components, plugins, terminal screen navigation, and keybinding definitions.

### Rules

- **R-OPENTUI-001** MUST: Terminal user interface plugin components MUST use @opentui/solid for view declaration and rendering.

### Verify

```bash
# Discover and execute the project test runner script defined in repository configuration.
# Discover and execute the project static analysis and linting verification script.
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code review enforce module imports and component structure against designated boundaries.
</enforcement>