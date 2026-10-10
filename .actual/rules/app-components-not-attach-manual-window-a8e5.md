# Adoption of @solid-primitives/media for Reactive Media Queries: Components Not Attach Manual Window Matchmedia

These rules are ALWAYS ACTIVE for frontend layout containers, panels, and user interface components requiring dynamic responsiveness to viewport dimensions or media preferences.

### Rules

- **R-MEDIA-001** MUST_NOT: Components MUST NOT attach manual window matchMedia event listeners or manage ad-hoc DOM resize listeners for layout responsiveness when equivalent primitives exist in @solid-primitives/media.
- **R-MEDIA-002** MANDATORY: Inspect the project dependency manifest and lock artifact to resolve the exact version of the media primitives library before calling primitive functions.
- **R-MEDIA-003** MANDATORY: Consolidate breakpoint definitions into shared layout modules to prevent divergent query strings across panels.

### Verify

```bash
# Discover the workspace verification script from the root project manifest and execute the static type checker across all frontend packages.
# Discover and run the project test runner to execute component test suites verifying responsive layout behavior.
```

**Accept when:**
- Static type verification passes across all frontend modules without missing type definitions for media query primitives.
- Component test suites covering responsive panels execute successfully without unhandled event listener errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>