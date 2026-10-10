# Adoption of @/context/language Module for Centralized Localization: Modules Not Bypass Centralized Language Context

These rules are ALWAYS ACTIVE for all application workspace components, dialogs, settings views, and user-notifying action modules that display user-visible text or handle locale changes.

### Rules

- **R-LANG-001** SHOULD_NOT: Modules MUST NOT bypass the centralized language context to resolve localized strings directly from unmanaged external resources at component render time.

### Verify

```bash
# Discover and execute the repository test runner to validate that component localization bindings render expected translated content across test suites.
# Discover and execute the repository static analysis and linting scripts to verify that user-facing modules import localization functionality exclusively from the designated context module.
```

**Accept when:**
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration test suites and static analysis rules.
</enforcement>