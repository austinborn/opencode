# Adopt SolidJS Reactive UI Library for Web Presentation Components: Presentation Components Not Combine Solidjs Reactive

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-SOLID-001** MUST_NOT: Presentation components MUST NOT combine SolidJS reactive JSX bindings with incompatible virtual DOM reconciliation mechanisms within the same component boundary.

### Verify

```bash
# Discover and run repository dependency verification, static analysis, type checking, and automated test suite
# (Commands to be discovered from the project repository)
```

**Accept when:**
- All web presentation components compile and typecheck cleanly against the locked reactive UI framework version.
- Component unit and integration test suites pass with zero runtime reactivity warnings or unhandled exceptions.
- Static analysis rules verify that reactive accessors and JSX runtime imports conform to component architectural standards.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced via automated continuous integration pipelines, static analysis, and peer code reviews.
</enforcement>