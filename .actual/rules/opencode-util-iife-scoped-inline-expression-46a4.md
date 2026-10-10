# Internal Module Adoption: @/util/iife for Scoped Inline Expression Execution: When Internal Utility Module Associated Runtime

These rules are ALWAYS ACTIVE for modules implementing multi-step inline expressions, error normalization, or complex argument construction, and components performing guarded input parsing or conditional configuration before binding immutable values.

### Rules

- **R-IFA-001** MUST: When the internal utility module or associated runtime dependencies rely on versioned packages, consumers MUST inspect the repository lock artifact to verify the exact resolved versions prior to implementation.
- **R-IFA-002** MUST: Import the utility via the designated module path alias and keep the executed callback focused strictly on computing and returning the target value.
- **R-IFA-003** MUST: Avoid side effects within the inline block to ensure pure evaluations and predictable testability.

### Verify

```bash
# Discover and run the repository static analysis and linting scripts
# Example discovery / execution:
# npm run lint || yarn lint || pnpm lint

# Discover and execute automated test suites
# npm test || yarn test || pnpm test
```

**Accept when:**
- All inline scoped block executions consume the centralized utility without raw immediate function expressions or unneeded mutable bindings.
- Static type analysis and automated test suites across all affected packages pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks and mandatory peer code review.
</enforcement>