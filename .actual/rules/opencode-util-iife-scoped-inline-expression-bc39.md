# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Engineers Extract Logic Dedicated Named Helper

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, or complex argument construction, and components performing guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-UTIL-001** SHOULD: Engineers extract logic into a dedicated named helper module when the block executed within @/util/iife exceeds single-responsibility scoping or is reused across multiple call sites.

### Verify

```bash
# Discover and run the repository static analysis and linting scripts
# Discover and execute automated test suites covering affected modules
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests introducing unencapsulated mutable variables or raw immediately invoked function expressions are rejected until refactored.
</enforcement>