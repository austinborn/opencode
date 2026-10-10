# @tanstack/solid-query Asynchronous Mutation and Interaction Pattern: Side Effects Resulting Mutations Including Cache

These rules are ALWAYS ACTIVE for frontend interactive components, dialogs, composer docks, and session views executing asynchronous mutations or service requests.

### Rules

- **R-TANSTACK-001** SHOULD: Side effects resulting from mutations, including cache invalidations and UI notifications, SHOULD be declared directly within mutation lifecycle callbacks.

### Verify

```bash
# Discover and run the project static analysis and linting scripts from the root repository manifest
# Discover and run the workspace test runner to validate interaction lifecycle handling across modified UI components
# Discover and execute type-checking suites across frontend packages to ensure type safety for mutation parameters and return values
```

**Accept when:**
- All frontend interaction mutations compile without type errors against the resolved @tanstack/solid-query package version.
- Asynchronous interaction tests pass without unhandled promise rejections or race condition warnings.
- Static verification scripts pass across all frontend packages without rule violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Violations must be refactored to utilize @tanstack/solid-query mutation primitives before merging.
</enforcement>