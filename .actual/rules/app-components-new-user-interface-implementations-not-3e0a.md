# Adoption of @opencode-ai/ui/v2 Component Library: New User Interface Implementations Not Introduce

These rules are ALWAYS ACTIVE for all user interface components, views, dialogs, and presentation controls within the application codebase.

### Rules

- **R-UI-001** MUST_NOT: New user interface implementations MUST NOT introduce ad-hoc primitive component implementations when a corresponding primitive exists in the @opencode-ai/ui/v2 library.

### Verify

```bash
# Discover workspace dependency manifest and execute designated static analysis script
# Discover repository test runner script and execute component unit and integration test suites
# Execute repository build verification command to ensure all component module exports resolve
```

**Accept when:**
- All newly authored user interface components import interactive primitives strictly from the @opencode-ai/ui/v2 package.
- The static import verification script passes across the component directory without detecting disallowed ad-hoc primitive implementations.
- Component test suites and compilation checks execute cleanly with zero module resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>