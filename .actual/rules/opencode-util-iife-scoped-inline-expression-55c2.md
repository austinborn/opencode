# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Engineers Adopt Internal Path Aliased Module

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, or complex argument construction, and components performing guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-UTIL-001** MUST: Engineers MUST adopt the internal path-aliased module @/util/iife when inline multi-statement execution or block-scoped computation is required to initialize immutable bindings or construct function arguments.

### Verify

```bash
# Discover and run repository static analysis, linting, and test scripts
npm run lint
npm run test
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks and mandatory peer code review.
</enforcement>