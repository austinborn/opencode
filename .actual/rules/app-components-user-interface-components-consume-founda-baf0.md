# Adoption of @opencode-ai/ui/v2 Component Library: User Interface Components Consume Foundational Interactive

These rules are ALWAYS ACTIVE for all user interface components, views, dialogs, and presentation controls within the application codebase.

### Rules

- **R-UI-001** MUST: User interface components MUST consume foundational interactive primitives and visual indicators from the @opencode-ai/ui/v2 module hierarchy.

### Verify

```bash
# Discover workspace dependency manifest and execute static analysis/linting script to verify module import constraints
# Discover repository test runner script and execute component unit and integration test suites
# Execute repository build verification command to ensure component module exports resolve cleanly
```

**Accept when:**
- All newly authored user interface components import interactive primitives strictly from the @opencode-ai/ui/v2 package.
- The static import verification script passes across the component directory without detecting disallowed ad-hoc primitive implementations.
- Component test suites and compilation checks execute cleanly with zero module resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis, linting checks, and peer code reviews in CI pipelines.
</enforcement>