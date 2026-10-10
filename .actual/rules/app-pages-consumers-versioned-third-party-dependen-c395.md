# Adoption of Internal Layout Context Module for Application Layout Coordination: Consumers Versioned Third Party Dependencies Supporting

These rules are ALWAYS ACTIVE for all page-level controllers, layout shells, session navigation components, and workspace selection dialogs requiring synchronized layout, active directory, and session route tracking.

### Rules

- **R-LAY-001** MUST: Consumers of versioned third-party dependencies supporting the layout context module MUST discover the repository dependency resolution artifact and verify the exact resolved version prior to implementation.

### Verify

```bash
# Discover and run the project static analysis and linting verification suite
# Discover and execute the unit and integration test runners
# Discover and invoke the architectural dependency boundary checker
```

**Accept when:**
- Static analysis confirms all page controllers and layout components import layout coordination state exclusively from the designated context module.
- Test suites pass with zero regressions in route synchronization and project worktree selection across home and session layouts.
- Architecture boundary verification validates no circular dependencies exist between the layout context module and consuming views.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated dependency boundary and import linting in CI pipelines, mandatory architectural code reviews, and integration test suites validating layout state propagation.
</enforcement>