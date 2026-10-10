# Adopt SolidJS Reactive UI Library for Web Presentation Components: Components Requiring Fine Grained Reactivity Utilize

These rules are ALWAYS ACTIVE for web client interactive presentation components and shared user interface modules requiring dynamic rendering and state reactivity.

### Rules

- **R-SOLID-001** MUST: Components requiring fine-grained reactivity MUST utilize SolidJS reactive signals, effects, and JSX runtime bindings rather than introducing competing UI view rendering engines.
- **R-SOLID-002** MANDATORY: Execute lock-version grounding before writing code that uses a versioned library by discovering the manifest, build tool, and inspecting the lock/resolution artifact to verify exact resolved versions and documentation.
- **R-SOLID-003** MANDATORY: Maintain signal accessor invocation within JSX templates and tracking scopes to guarantee automatic reactive subscription registration.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI pipelines executing static analysis, type checking, and peer code reviews verifying reactive signal bindings and component composition standards.
</enforcement>