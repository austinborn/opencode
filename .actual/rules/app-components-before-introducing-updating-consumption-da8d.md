# Adoption of @opencode-ai/ui Component Library for Application Interfaces: Before Introducing Updating Consumption Opencode Dependencies

These rules are ALWAYS ACTIVE for user interface dialogs, settings panels, and context widgets within application presentation packages, as well as Storybook fixture definitions and component documentation stories for user interface screens.

### Rules

- **R-UI-001** MUST: Before introducing or updating consumption of @opencode-ai/ui dependencies, developers MUST discover the workspace dependency manifest and authoritative resolution lock artifact to verify the exact resolved package version against official documentation.

### Verify

```bash
# Discover the workspace static analysis script from root configuration and execute it
# Discover and run the project test and story validation suites
```

**Accept when:**
- All application dialogs and settings views import interactive elements and modal structures exclusively from the @opencode-ai/ui component library namespace.
- Workspace static analysis and test validation suites pass without unapproved UI component dependencies or import contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated workspace linting and static import verification rules in continuous integration enforce these rules, blocking pull request merges upon violation.
</enforcement>