# Adopt SolidJS Reactive UI Library for Web Presentation Components: Web Presentation Component Layer Use Solidjs

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-SOLID-001** MUST: The web presentation component layer MUST use SolidJS as the primary reactive UI library for declarative component rendering and fine-grained state reactivity.
- **R-SOLID-002** MUST: Maintain signal accessor invocation within JSX templates and tracking scopes to guarantee automatic reactive subscription registration.
- **R-SOLID-003** MUST: Follow mandatory lock-version grounding to verify exact resolved versions of companion primitives against the core runtime before writing code using a versioned library.
- **R-SOLID-004** SHOULD: Colocate component-specific styles alongside presentation components while keeping reactive state logic decoupled from presentation markup.

### Verify

```bash
# Discover and run the repository dependency verification command to validate lock resolution integrity for user interface runtime packages.
# Discover and run the project static analysis and type checking suite to verify SolidJS reactive component compliance across web modules.
# Discover and run the project automated test suite to ensure all reactive UI components mount, render, and update without errors.
```

**Accept when:**
- All web presentation components compile and typecheck cleanly against the locked reactive UI framework version.
- Component unit and integration test suites pass with zero runtime reactivity warnings or unhandled exceptions.
- Static analysis rules verify that reactive accessors and JSX runtime imports conform to component architectural standards.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing alternative UI view engines or violating fine-grained reactivity conventions are blocked from merging.
</enforcement>