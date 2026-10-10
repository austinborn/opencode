# Adoption of @solid-primitives/media for Reactive Media Queries: Before Implementing Updating Usages Solid Primitives

These rules are ALWAYS ACTIVE for frontend layout containers, panels, and user interface components requiring dynamic responsiveness to viewport dimensions or media preferences.

### Rules

- **R-MEDIA-001** MUST: Before implementing or updating usages of @solid-primitives/media, engineers MUST inspect the repository dependency lock artifact to determine the exact resolved version and verify that all invoked primitive APIs exist within that release.

### Verify

```bash
# Discover workspace verification script from root project manifest and run static type checking
# Discover and run project test runner for component test suites
```

**Accept when:**
- Static type verification passes across all frontend modules without missing type definitions for media query primitives.
- Component test suites covering responsive panels execute successfully without unhandled event listener errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>