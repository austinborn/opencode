# Adoption of @opencode-ai/ui/v2 Component Library: Consumer Modules Encapsulate Opencode Primitives Within

These rules are ALWAYS ACTIVE for all user interface components, views, dialogs, and presentation controls within the application codebase.

### Rules

- **R-OPENC_UI-001** MAY: Consumer modules MAY encapsulate @opencode-ai/ui/v2 primitives within domain-specific composite widgets to enforce localized business logic and state bindings.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis, linting, and continuous integration gates.
</enforcement>