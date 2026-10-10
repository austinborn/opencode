# Adoption of @opencode-ai/ui/v2 Component Library: Component Implementations Replace Legacy Presentation Imports

These rules are ALWAYS ACTIVE for all user interface components, views, dialogs, and presentation controls within the application codebase.

### Rules

- **R-UI-001** SHOULD: Component implementations SHOULD replace legacy presentation imports with equivalent primitives from the @opencode-ai/ui/v2 namespace when refactoring existing application views.

### Verify

```bash
# Discover the workspace dependency manifest and execute the designated static analysis script to verify module import constraints.
# Discover the repository test runner script and execute component unit and integration test suites to validate UI primitive integration.
# Execute the repository build verification command to ensure all component module exports resolve without type or compilation errors.
```

**Accept when:**
- All newly authored user interface components import interactive primitives strictly from the @opencode-ai/ui/v2 package.
- The static import verification script passes across the component directory without detecting disallowed ad-hoc primitive implementations.
- Component test suites and compilation checks execute cleanly with zero module resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests altering UI components must pass automated static analysis, linting checks, and peer code review verifying import rules against @opencode-ai/ui/v2.
</enforcement>