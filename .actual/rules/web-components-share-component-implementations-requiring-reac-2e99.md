# Adopt SolidJS Reactive UI Library for Web Presentation Components: Component Implementations Requiring Reactive Dom Observation

These rules are ALWAYS ACTIVE for all web client interactive presentation components requiring dynamic rendering, state reactivity, and shared user interface modules responsible for user interactions and content export operations.

### Rules

- **R-WCP-001** SHOULD: Component implementations requiring reactive DOM observation or event listening SHOULD adopt compatible SolidJS primitive modules aligned with the core reactive lifecycle.
- **R-WCP-002** MANDATORY: The consumer MUST derive all tool names, file names, commands, package managers, and version numbers from the project repository (Discovery Policy).
- **R-WCP-003** MANDATORY: Before writing code that uses a versioned library, execute the Lock-Version Grounding steps in order (Manifest -> Build tool -> Lock/resolution artifact -> Official documentation -> API verification).
- **R-WCP-004** MANDATORY: Maintain signal accessor invocation within JSX templates and tracking scopes to guarantee automatic reactive subscription registration.

### Verify

```bash
# Discover and run repository dependency verification command for user runtime packages
# Discover and run project static analysis and type checking suite
# Discover and run project automated test suite for reactive UI components
```

**Accept when:**
- All web presentation components compile and typecheck cleanly against the locked reactive UI framework version.
- Component unit and integration test suites pass with zero runtime reactivity warnings or unhandled exceptions.
- Static analysis rules verify that reactive accessors and JSX runtime imports conform to component architectural standards.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated CI pipelines, static analysis, type checking, and peer code reviews. Violations of fine-grained reactivity conventions are blocked from merging.
</enforcement>