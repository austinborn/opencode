# Adoption of @opencode-ai/ui Component Library for Application Interfaces: User Interface Dialogs Settings Panels Interactive

These rules are ALWAYS ACTIVE for all user interface dialogs, settings panels, context widgets within application presentation packages, and Storybook fixture definitions and component documentation stories.

### Rules

- **R-UI-001** MUST: All user interface dialogs, settings panels, and interactive controls MUST consume presentation primitives and modal state abstractions directly from the @opencode-ai/ui module namespace.

### Verify

```bash
# Discover and run the workspace static analysis script from root configuration
# Discover and run the project test and story validation suites
```

**Accept when:**
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated workspace linting and static import verification rules in continuous integration enforce these constraints.
</enforcement>