# Adoption of solid-js for Reactive User Interface Architecture: Components Not Bypass Reactive Tracking System

These rules are ALWAYS ACTIVE for all user-facing interactive frontend components, dialogs, drawers, presentation views, and stateful client UI modules that track user interactions and asynchronous data updates.

### Rules

- **R-SOLID-001** MUST_NOT: Components MUST NOT bypass the reactive tracking system through direct unmanaged DOM mutations or mutable object property modifications outside of reactive setters.

### Verify

```bash
# Discover the test script declared in the repository manifest and execute the test runner to verify component behavior.
# Discover the type validation script declared in the project configuration and execute type checking across all reactive component sources.
# Discover the build script from the project manifest and execute the bundle compilation to ensure proper dependency resolution.
```

**Accept when:**
- All unit and component tests execute and pass through the discovered test verification pipeline.
- Type verification completes without errors across all solid-js reactive primitive usages.
- The application bundle builds successfully without unresolved reactive runtime imports.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration pipeline executing test suites, static analysis checks, and peer code review.
</enforcement>