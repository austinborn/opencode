# Adoption of Internal Layout Context Module for Application Layout Coordination: Components Requiring Project Lookup Directory Association

These rules are ALWAYS ACTIVE for page-level controllers, layout shells, session navigation components, and workspace selection dialogs requiring synchronized layout, active directory, and session route tracking.

### Rules

- **R-ADR-001** SHOULD: Components requiring project lookup and directory association query project collections through the layout context interface rather than persisting localized project state caches.

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
Claude Code MUST NOT skip or defer verification. All layout state access must strictly route through the designated context module.
</enforcement>