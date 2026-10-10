# Adoption of @solid-primitives/media for Reactive Media Queries: Components Encapsulate Breakpoint Evaluations Boundary Responsive

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-MEDIA-001** SHOULD: Components SHOULD encapsulate breakpoint evaluations at the boundary of responsive layout containers and pass derived boolean states to child presentation components.
- **R-MEDIA-002** MANDATORY: Inspect the project dependency manifest and lock artifact to resolve the exact version of the media primitives library before calling primitive functions.
- **R-MEDIA-003** MANDATORY: Consolidate breakpoint definitions into shared layout modules to prevent divergent query strings across panels.

### Verify

```bash
# Discover workspace verification script from root project manifest and execute type check
# Discover and run project test runner for responsive layout component tests
```

**Accept when:**
- Static type verification passes across all frontend modules without missing type definitions for media query primitives.
- Component test suites covering responsive panels execute successfully without unhandled event listener errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>