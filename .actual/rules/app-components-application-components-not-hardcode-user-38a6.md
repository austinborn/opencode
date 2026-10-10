# Adoption of @/context/language Module for Centralized Localization: Application Components Not Hardcode User Visible

These rules are ALWAYS ACTIVE for all application workspace components, dialogs, settings views, and user-notifying action modules that display user-visible text or handle locale changes.

### Rules

- **R-LOC-001** MUST_NOT: Application components MUST NOT hardcode user-visible interface strings or declare isolated translation structures outside the centralized @/context/language module.

### Verify

```bash
# Discover and execute the repository test runner
npm test

# Discover and execute the repository static analysis and linting scripts
npm run lint
```

**Accept when:**
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification by automated continuous integration test suites, static analysis rules, and peer code review is mandatory.
</enforcement>