# Adoption of @opentui/solid for Terminal User Interface Components: Screen Actions Such Modal Dialogues Alerts

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-SCREEN-001** SHOULD: Screen actions such as modal dialogues, alerts, and navigation commands SHOULD be isolated into discrete screen command definitions.

### Verify

```bash
# Discover and execute the project test runner script defined in repository configuration.
# Discover and execute the project static analysis and linting verification script.
```

**Accept when:**
- All terminal interface component test suites execute successfully without rendering errors.
- Static analysis verifies that all keymap registrations map to recognized screen command handlers.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis checks and peer code reviews verify module imports and component structure against designated boundaries.
</enforcement>