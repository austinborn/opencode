# Adoption of @solid-primitives/media for Reactive Media Queries: Components Combine Solid Primitives Media Component

These rules are ALWAYS ACTIVE for frontend layout containers, panels, and user interface components requiring dynamic responsiveness to viewport dimensions or media preferences.

### Rules

- **R-MEDIA-001** MAY: Components MAY combine @solid-primitives/media primitives with component-local reactive signals to coordinate composite responsive behavior.

### Verify

```bash
# Discover the workspace verification script from the root project manifest and execute static type checking and component tests
```

**Accept when:**
- Static type verification passes across all frontend modules without missing type definitions for media query primitives.
- Component test suites covering responsive panels execute successfully without unhandled event listener errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>