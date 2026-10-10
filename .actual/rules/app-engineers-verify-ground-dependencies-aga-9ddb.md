# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Engineers Verify Ground Dependencies Against Project

These rules are ALWAYS ACTIVE for all client-side application context providers, synchronization controllers, session managers, UI components performing asynchronous server communication, and workspace packages interacting with server endpoints via client adapters.

### Rules

- **R-OPENC-001** MUST: Engineers MUST verify and ground all dependencies against the project lock artifact to resolve the exact version before implementing or modifying calls to @opencode-ai/client/promise.
- **R-OPENC-002** MUST: Import asynchronous helper primitives exclusively from @opencode-ai/client/promise when building context synchronization hooks or session actions.
- **R-OPENC-003** MUST: Ensure all asynchronous handlers integrate cleanly with reactive component cleanup functions to prevent state updates on unmounted views.

### Verify

```bash
# Discover and execute the project workspace type validation
# Discover and execute the project linting and static analysis toolchain to verify asynchronous client calls
# Discover and execute the test runner suite to validate asynchronous promise handling and error propagation
```

**Accept when:**
- All client context and UI components compile without type errors using @opencode-ai/client/promise for asynchronous operations.
- Static analysis passes with zero disallowed raw asynchronous transport imports in application modules.
- All unit and integration tests for session synchronization and client communication pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>