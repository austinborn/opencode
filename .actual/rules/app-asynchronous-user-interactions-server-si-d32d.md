# @tanstack/solid-query Asynchronous Mutation and Interaction Pattern: Asynchronous User Interactions Server Side State

These rules are ALWAYS ACTIVE for frontend interactive components, dialogs, composer docks, and session views executing asynchronous mutations or service requests.

### Rules

- **R-TANSTACK-001** MUST: All asynchronous user interactions and server-side state modifications originating in user interface components MUST be managed using @tanstack/solid-query mutation primitives.

### Verify

```bash
# Discover and run the project static analysis and linting scripts from the root repository manifest
# Discover and run the workspace test runner to validate interaction lifecycle handling
# Discover and execute type-checking suites across frontend packages
```

**Accept when:**
- All frontend interaction mutations compile without type errors against the resolved @tanstack/solid-query package version.
- Asynchronous interaction tests pass without unhandled promise rejections or race condition warnings.
- Static verification scripts pass across all frontend packages without rule violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>