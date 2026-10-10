# Adopt SolidJS Reactive UI Library for Web Presentation Components: Developers Inspect Repository Dependency Manifest Authoritative

These rules are ALWAYS ACTIVE for all web client interactive presentation components requiring dynamic rendering, shared user interface modules responsible for user interactions and content export operations, and associated JSX runtime configurations.

### Rules

- **R-SLD-001** MUST: Developers MUST inspect the repository dependency manifest and authoritative lock artifact to resolve the exact locked version of SolidJS and verify API compatibility before declaring component imports or calling reactive APIs.
- **R-SLD-002** MUST: Maintain signal accessor invocation within JSX templates and tracking scopes to guarantee automatic reactive subscription registration.
- **R-SLD-003** MUST: Colocate component-specific styles alongside presentation components while keeping reactive state logic decoupled from presentation markup.
- **R-SLD-004** MUST: Execute lock-version grounding in order (find manifest, identify build tool, inspect lock/resolution artifact, look up official docs for that exact version, and confirm every API/class/function exists before use) prior to writing code that uses a versioned library.

### Verify

```bash
# Discover and run repository dependency verification command to validate lock resolution integrity
# Discover and run project static analysis and type checking suite
# Discover and run project automated test suite
```

**Accept when:**
- All web presentation components compile and typecheck cleanly against the locked reactive UI framework version.
- Component unit and integration test suites pass with zero runtime reactivity warnings or unhandled exceptions.
- Static analysis rules verify that reactive accessors and JSX runtime imports conform to component architectural standards.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration pipelines and peer code reviews enforce compliance, and pull requests violating fine-grained reactivity conventions are blocked from merging.
</enforcement>