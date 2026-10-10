# @tanstack/solid-query Asynchronous Mutation and Interaction Pattern: Developers Inspect Repository Lock Artifact Determine

These rules are ALWAYS ACTIVE for frontend interactive components, dialogs, composer docks, and session views executing asynchronous mutations or service requests.

### Rules

- **R-TANSTACK-001** MUST: Developers MUST inspect the repository lock artifact to determine the exact resolved version of @tanstack/solid-query and adhere strictly to its documented mutation lifecycle APIs before implementation.

### Verify

```bash
# Discover and run static analysis, linting, test suites, and type-checking suites from the project manifest
# Example standard workspace verification commands:
npm run lint
npm run test
npm run typecheck
```

**Accept when:**
- All frontend interaction mutations compile without type errors against the resolved @tanstack/solid-query package version.
- Asynchronous interaction tests pass without unhandled promise rejections or race condition warnings.
- Static verification scripts pass across all frontend packages without rule violations.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>