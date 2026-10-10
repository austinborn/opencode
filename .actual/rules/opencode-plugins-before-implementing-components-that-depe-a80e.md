# Adoption of @opentui/solid for Terminal User Interface Components: Before Implementing Components That Depend Opentui

These rules are ALWAYS ACTIVE for all interactive terminal user interface components, plugins, terminal screen navigation, and keybinding definitions.

### Rules

- **R-OTUI-001** MUST: Before implementing components that depend on @opentui/solid or related modules, locate the project lock artifact and verify the exact resolved version against authorized documentation.

### Verify

```bash
# Discover and execute the project test runner script defined in repository configuration
# Discover and execute the project static analysis and linting verification script
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code review enforce module imports, component structure, and lock-version grounding.
</enforcement>