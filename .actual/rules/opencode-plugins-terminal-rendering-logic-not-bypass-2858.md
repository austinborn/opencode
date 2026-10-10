# Adoption of @opentui/solid for Terminal User Interface Components: Terminal Rendering Logic Not Bypass Opentui

These rules are ALWAYS ACTIVE for all interactive terminal user interface components, plugins, terminal screen navigation, and keybinding definitions.

### Rules

- **R-OTUI-001** MUST_NOT: Terminal rendering logic MUST NOT bypass @opentui/solid reactive primitives to directly manipulate terminal output streams.

### Verify

```bash
# Discover and execute project test runner script
# Discover and execute project static analysis and linting verification script
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and peer code reviews verify module imports and component structure against designated boundaries.
</enforcement>