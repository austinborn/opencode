# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: Invocations Util Iife Encapsulate Error Prone

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, or complex argument construction, and components performing guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-IIFE-001** SHOULD: Invocations of @/util/iife SHOULD encapsulate error-prone transformations and validation parsing, ensuring failure states are normalized before propagating outside the execution boundary.

### Verify

```bash
# Discover and run repository static analysis, linting, and test scripts
npm run lint
npm test
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Verification is mandatory. Claude Code MUST NOT skip or defer verification.
</enforcement>