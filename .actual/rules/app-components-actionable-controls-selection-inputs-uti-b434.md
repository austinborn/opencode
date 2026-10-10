# Adoption of @opencode-ai/ui Component Library for Application Interfaces: Actionable Controls Selection Inputs Utilize Standard

These rules are ALWAYS ACTIVE for user interface dialogs, settings panels, and context widgets within application presentation packages.

### Rules

- **R-OPENC-001** SHOULD: Actionable controls and selection inputs utilize standard primitives from @opencode-ai/ui/button, @opencode-ai/ui/icon, @opencode-ai/ui/select, and @opencode-ai/ui/switch.

### Verify

```bash
# Discover the workspace static analysis script from root configuration and execute
# Discover and run project test and story validation suites
```

**Accept when:**
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>