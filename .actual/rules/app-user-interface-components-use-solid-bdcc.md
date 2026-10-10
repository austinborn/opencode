# Adoption of solid-js for Reactive User Interface Architecture: User Interface Components Use Solid Standard

These rules are ALWAYS ACTIVE for all user-facing interactive frontend components, dialogs, drawers, and presentation views, as well as stateful client UI modules that track user interactions and asynchronous data updates.

### Rules

- **R-SOLID-001** MUST: User interface components MUST use solid-js as the standard reactive rendering library for interactive UI views and dialogs.
- **R-SOLID-002** MUST: Preserve reactivity by accessing props via accessors rather than destructuring parameters at component boundaries.
- **R-SOLID-003** MUST: Encapsulate compound state in reactive stores for multi-field forms and dialog configurations to simplify batch updates.
- **R-SOLID-004** MUST: Strictly adhere to the lock-version grounding policy by validating dependencies against the authoritative repository lock artifact before writing code that uses a versioned library.

### Verify

```bash
# Discover and execute the test runner declared in the repository manifest
# Discover and execute the type validation script across all reactive component sources
# Discover and execute the build script to ensure proper dependency resolution and compilation
```

**Accept when:**
- All unit and component tests execute and pass through the discovered test verification pipeline.
- Type verification completes without errors across all solid-js reactive primitive usages.
- The application bundle builds successfully without unresolved reactive runtime imports.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated test suites, type checking, and peer code review.
</enforcement>