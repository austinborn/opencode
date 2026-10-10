# Adoption of Internal Layout Context Module for Application Layout Coordination: Application Page Controllers Session Views Layout

These rules are ALWAYS ACTIVE for all application page controllers, session views, and layout-level components requiring layout, active workspace, and route coordination state.

### Rules

- **R-LAY-001** MUST: All application page controllers, session views, and layout-level components MUST consume the internal layout context module as the authoritative source for layout, active workspace, and route coordination state.

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
Claude Code MUST NOT skip or defer verification. Verified by automated dependency boundary and import linting in CI pipelines, mandatory architectural code reviews, and integration test suites validating layout state propagation across route transitions.
</enforcement>