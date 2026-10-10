# Adoption of solid-js for Reactive User Interface Architecture: Web Specific Mount Cycles Dom Portal

These rules are ALWAYS ACTIVE for all user-facing interactive frontend components, dialogs, drawers, presentation views, and stateful client UI modules that track user interactions and asynchronous data updates.

### Rules

- **R-SOLID-001** SHOULD: Web-specific mount cycles and DOM portal integrations utilize primitives provided by the companion web package of solid-js.
- **R-SOLID-002** MANDATORY: Preserve reactivity by accessing props via accessors rather than destructuring parameters at component boundaries.
- **R-SOLID-003** MANDATORY: Encapsulate compound state in reactive stores for multi-field forms and dialog configurations to simplify batch updates.
- **R-SOLID-004** MANDATORY: Adhere to the lock-version grounding policy by validating dependencies against the authoritative repository lock artifact before writing code that uses a versioned library.

### Verify

```bash
# Discover the test script declared in the repository manifest and execute the test runner
# Discover the type validation script declared in the project configuration and execute type checking
# Discover the build script from the project manifest and execute bundle compilation
```

**Accept when:**
- All unit and component tests execute and pass through the discovered test verification pipeline.
- Type verification completes without errors across all solid-js reactive primitive usages.
- The application bundle builds successfully without unresolved reactive runtime imports.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests and changes must adhere to reactive state patterns, signal handling conventions, and static analysis checks.
</enforcement>