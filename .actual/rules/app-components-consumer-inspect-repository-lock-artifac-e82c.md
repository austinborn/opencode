# Adoption of @/context/language Module for Centralized Localization: Consumer Inspect Repository Lock Artifact Dependency

These rules are ALWAYS ACTIVE for all application workspace components, dialogs, settings views, and user-notifying action modules that display user-visible text or handle locale changes.

### Rules

- **R-LOC-001** MUST: The consumer MUST inspect the repository lock artifact and dependency manifest to verify compatible runtime dependencies before introducing or altering shared context bindings.
- **R-LOC-002** MUST: Ensure all user-facing components obtain string formatting functions via the established context hook rather than reading raw configuration properties.
- **R-LOC-003** MUST: Wrap new UI views and dialog roots within the shared language provider during composition to ensure downstream consumer hooks resolve valid localization data.

### Verify

```bash
# Discover and execute the repository test runner to validate component localization bindings
# Discover and execute the repository static analysis and linting scripts to verify user-facing modules import localization functionality exclusively from the designated context module
```

**Accept when:**
- Repository test suites pass with zero translation resolution errors across all component and dialog views.
- Repository static analysis verifies that no hardcoded user-visible strings exist in newly authored or modified presentation components.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration pull request checks fail when unlocalized strings or unauthorized localization mechanisms are introduced.
</enforcement>