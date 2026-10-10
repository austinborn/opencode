# Adoption of @/context/language Module for Centralized Localization: Components Requiring Localized Text Receive Translations

These rules are ALWAYS ACTIVE for all application workspace components, dialogs, settings views, and user-notifying action modules that display user-visible text or handle locale changes.

### Rules

- **R-LOC-001** SHOULD: Components requiring localized text SHOULD receive translations and locale triggers directly through @/context/language context bindings rather than propagating language state across intermediary property hierarchies.

### Verify

```bash
# Discover and execute the repository test runner
# Discover and execute the repository static analysis and linting scripts
```

**Accept when:**
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pull request checks fail when unlocalized strings or unauthorized localization mechanisms are introduced.
</enforcement>