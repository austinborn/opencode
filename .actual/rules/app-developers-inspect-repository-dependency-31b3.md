# Adoption of solid-js for Reactive User Interface Architecture: Developers Inspect Repository Dependency Manifest Authoritative

These rules are ALWAYS ACTIVE for all user-facing interactive frontend components, dialogs, drawers, and presentation views, as well as stateful client UI modules.

### Rules

- **R-SOLID-001** MUST: Developers MUST inspect the repository dependency manifest and authoritative lock artifact to resolve the exact locked version of solid-js prior to introducing or updating reactive components.
- **R-SOLID-002** MUST: Preserve reactivity by accessing props via accessors rather than destructuring parameters at component boundaries.
- **R-SOLID-003** SHOULD: Encapsulate compound state in reactive stores for multi-field forms and dialog configurations to simplify batch updates.

### Verify

```bash
# Discover and execute the test script declared in the repository manifest
# Discover and execute the type validation script declared in project configuration
# Discover and execute the build script from the project manifest
```

**Accept when:**
- All unit and component tests execute and pass through the discovered test verification pipeline.
- Type verification completes without errors across all solid-js reactive primitive usages.
- The application bundle builds successfully without unresolved reactive runtime imports.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration pipelines, test suites, static analysis checks, and peer code reviews.
</enforcement>