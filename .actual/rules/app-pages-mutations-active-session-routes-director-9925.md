# Adoption of Internal Layout Context Module for Application Layout Coordination: Mutations Active Session Routes Directory Selections

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-APP-001** MUST: Mutations to active session routes, directory selections, and layout visibility MUST be dispatched through the layout context module to preserve synchronized state across all observing controllers.

### Verify

```bash
# Discover and run project static analysis, linting verification, and dependency boundary checkers
# Example discovery flows depending on repository build tool:
# - Run lint / typecheck (e.g., npm run lint, cargo check, etc.)
# - Run unit and integration tests (e.g., npm test, pytest, etc.)
```

**Accept when:**
- Static analysis confirms all page controllers and layout components import layout coordination state exclusively from the designated context module.
- Test suites pass with zero regressions in route synchronization and project worktree selection across home and session layouts.
- Architecture boundary verification validates no circular dependencies exist between the layout context module and consuming views.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>