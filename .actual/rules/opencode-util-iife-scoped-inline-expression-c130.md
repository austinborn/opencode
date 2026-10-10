# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Invocations Util Iife Utility Synchronous When

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, or complex argument construction, and components performing guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-UTIL-001** MUST: Invocations of the @/util/iife utility MUST be synchronous when encapsulating synchronous parsing or mapping operations, returning the computed value directly to the caller.

### Verify

```bash
# Discover and run the repository static analysis and linting scripts
# Discover and execute automated test suites covering affected modules
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks and mandatory peer code review.
</enforcement>