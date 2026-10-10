# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Modules Managing Background Synchronization Session Lifecycle

These rules are ALWAYS ACTIVE for modules managing background synchronization, session lifecycle, and UI state reconciliation performing asynchronous server communication.

### Rules

- **R-ASYNC-001** MUST: Modules managing background synchronization, session lifecycle, and UI state reconciliation MUST consume @opencode-ai/client/promise abstractions to ensure uniform async error propagation.

### Verify

```bash
# Discover and execute workspace type validation, linting, static analysis, and test suites
npm run typecheck
npm run lint
npm test
```

**Accept when:**
- All client context and UI components compile without type errors using @opencode-ai/client/promise for asynchronous operations.
- Static analysis passes with zero disallowed raw asynchronous transport imports in application modules.
- All unit and integration tests for session synchronization and client communication pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks execute static analysis, type verification, and test suites, failing if unapproved asynchronous client invocation patterns are detected.
</enforcement>