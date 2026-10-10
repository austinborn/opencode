# Adoption of @opencode-ai/ui/v2 Component Library: Complex Composite Dialogs Menus Input Controls

These rules are ALWAYS ACTIVE for all user interface components, views, dialogs, and presentation controls within the application codebase.

### Rules

- **R-UI-001** MUST: Complex composite dialogs, menus, and input controls MUST consume accessibility-wrapped primitives exported by the @opencode-ai/ui/v2 package.

### Verify

```bash
# Discover workspace dependency manifest, static analysis script, test runner, and build verification command from the repository
# Execute static analysis script to verify module import constraints
# Execute component unit and integration test suites
# Execute repository build verification command
```

**Accept when:**
- All newly authored user interface components import interactive primitives strictly from the @opencode-ai/ui/v2 package.
- The static import verification script passes across the component directory without detecting disallowed ad-hoc primitive implementations.
- Component test suites and compilation checks execute cleanly with zero module resolution errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code reviews enforce import rules, and violations will fail continuous integration gates.
</enforcement>