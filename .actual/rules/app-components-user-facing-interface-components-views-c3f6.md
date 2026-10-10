# Adoption of @/context/language Module for Centralized Localization: User Facing Interface Components Views Dialogs

These rules are ALWAYS ACTIVE for all user-facing interface components, views, dialogs, and user-notifying action modules across the application workspace.

### Rules

- **R-LANG-001** MUST: All user-facing interface components, views, dialogs, and user-notifying action modules MUST consume the @/context/language module as the authoritative source for localized strings and locale state.

### Verify

```bash
# Discover and execute repository test runner to validate component localization bindings
# Discover and execute repository static analysis and linting scripts to verify localization imports
```

**Accept when:**
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>