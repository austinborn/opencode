# Adoption of @opencode-ai/ui Component Library for Application Interfaces: Application Components Not Introduce Hoc Duplicate

These rules are ALWAYS ACTIVE for user interface dialogs, settings panels, context widgets within application presentation packages, and Storybook fixture definitions and component documentation stories for user interface screens.

### Rules

- **R-OPENC-001** MUST_NOT: Application components MUST NOT introduce ad-hoc duplicate implementations of UI primitives already provided by the @opencode-ai/ui component library.

### Verify

```bash
# Discover the workspace static analysis script from the root configuration and execute it to verify that all UI imports resolve to the approved design system namespace.
# Discover and run the project test and story validation suites to confirm modal dialogs and interactive controls render without component contract violations.
```

**Accept when:**
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated workspace linting, static import verification rules in continuous integration, and mandatory design and code review approvals.
</enforcement>