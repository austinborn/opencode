# Adoption of @solid-primitives/media for Reactive Media Queries: Frontend User Interface Components Requiring Viewport

These rules are ALWAYS ACTIVE for frontend layout containers, panels, and user interface components requiring dynamic responsiveness to viewport dimensions or media preferences.

### Rules

- **R-MEDIA-001** MUST: Frontend user interface components requiring viewport-dependent or media-dependent reactive behavior MUST use @solid-primitives/media primitives for evaluating media query states.

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