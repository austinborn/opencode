# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Application Components Not Instantiate Hoc Unmanaged

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-CLIENT-001** MUST_NOT: Application components MUST NOT instantiate ad-hoc or unmanaged promise handlers when coordinating asynchronous state with server services.

### Verify

```bash
# Discover and execute the project workspace verification script for type validation
npm run typecheck

# Discover and execute linting/static analysis to verify client-side promise standard
npm run lint

# Discover and execute test runner suite
npm test
```

**Accept when:**
- All client context and UI components compile without type errors using @opencode-ai/client/promise for asynchronous operations.
- Static analysis passes with zero disallowed raw asynchronous transport imports in application modules.
- All unit and integration tests for session synchronization and client communication pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. All client asynchronous interactions must route through @opencode-ai/client/promise and pass automated static analysis and type verification.
</enforcement>