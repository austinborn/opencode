# Adoption of Internal Layout Context Module for Application Layout Coordination: Page Controllers Layout Components Not Implement

These rules are ALWAYS ACTIVE for page-level controllers, layout shells, session navigation components, workspace selection dialogs, and application views requiring synchronized layout, active directory, and session route tracking.

### Rules

- **R-LAY-001** MUST_NOT: Page controllers and layout components MUST NOT implement independent duplicate tracking of active project worktrees or navigation routes outside the layout context module boundary.

### Verify

```bash
# Discover and run the project static analysis and linting verification suite to check for prohibited direct state duplication across controller modules.
# Discover and execute the unit and integration test runners to validate state synchronization between the layout context module and consuming controllers.
# Discover and invoke the architectural dependency boundary checker to ensure all layout state access routes strictly through the designated context module.
```

**Accept when:**
- Static analysis confirms all page controllers and layout components import layout coordination state exclusively from the designated context module.
- Test suites pass with zero regressions in route synchronization and project worktree selection across home and session layouts.
- Architecture boundary verification validates no circular dependencies exist between the layout context module and consuming views.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violation handling: Pull requests introducing direct layout state replication or bypassing the layout context module are blocked until refactored.
</enforcement>