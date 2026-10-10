# Adoption of @opencode-ai/ui Component Library for Application Interfaces: Modal Dialog Components Coordinate Visibility Lifecycle

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-UI-001** MUST: Modal dialog components MUST coordinate visibility and lifecycle transitions through @opencode-ai/ui/context/dialog and @opencode-ai/ui/dialog rather than maintaining bespoke container implementations.

### Verify

```bash
# Discover and run the workspace static analysis script and test suites to verify UI imports and component contracts
# (Commands to be discovered from workspace configuration per project policy)
```

**Accept when:**
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated workspace linting and static import verification rules in continuous integration enforce these constraints.
</enforcement>