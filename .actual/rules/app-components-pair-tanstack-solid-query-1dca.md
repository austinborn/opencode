# @tanstack/solid-query Asynchronous Mutation and Interaction Pattern: Components Pair Tanstack Solid Query Mutation

These rules are ALWAYS ACTIVE for frontend interactive components, dialogs, composer docks, and session views executing asynchronous mutations or service requests.

### Rules

- **R-TANSTACK-001** MAY: Components MAY pair @tanstack/solid-query mutation status with fine-grained local reactive signals when managing transient intermediate user input before mutation dispatch.

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
Claude Code MUST NOT skip or defer verification. Raw unmanaged async service calls in UI components must be refactored to utilize @tanstack/solid-query mutation primitives.
</enforcement>