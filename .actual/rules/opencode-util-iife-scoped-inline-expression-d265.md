# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Engineers Not Use Raw Immediately Invoked

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, complex argument construction, and guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-IIFE-001** MUST_NOT: Engineers MUST NOT use raw immediately invoked function expressions or introduce mutable variable bindings in outer scopes to perform multi-step conditional evaluations or exception-prone parsing.

### Verify

```bash
# Discover and run repository static analysis, linting, and automated test suites
# (Commands to be discovered from package manifests and test configuration in the repository)
npm run lint
npm run test
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Compliance is enforced via automated static analysis checks and mandatory peer code review during pull request evaluation.
</enforcement>