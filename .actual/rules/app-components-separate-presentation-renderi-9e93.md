# Adoption of solid-js for Reactive User Interface Architecture: Components Separate Presentation Rendering Asynchronous Data

These rules are ALWAYS ACTIVE for all user-facing interactive frontend components, dialogs, drawers, presentation views, and stateful client UI modules that track user interactions and asynchronous data updates.

### Rules

- **R-SLD-001** SHOULD: Components SHOULD separate presentation rendering from asynchronous data fetching by wrapping reactive stores and signals inside dedicated context providers.
- **R-SLD-002** MANDATORY: Preserve reactivity by accessing props via accessors rather than destructuring parameters at component boundaries.
- **R-SLD-003** MANDATORY: Encapsulate compound state in reactive stores for multi-field forms and dialog configurations to simplify batch updates.
- **R-SLD-004** MANDATORY: Ground all dependency versions by inspecting the repository lock or resolution artifact prior to using versioned libraries.

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
Claude Code MUST NOT skip or defer verification.
</enforcement>