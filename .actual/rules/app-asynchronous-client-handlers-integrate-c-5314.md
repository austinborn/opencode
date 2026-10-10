# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Asynchronous Client Handlers Integrate Cancellation Tokens

These rules are ALWAYS ACTIVE for client-side application context providers, synchronization controllers, session managers, UI components performing asynchronous server communication, and workspace packages that interact with server endpoints via client adapters.

### Rules

- **R-ASYNC-001** SHOULD: Asynchronous client handlers integrate cancellation tokens and reactive lifecycle disposal hooks provided by the client framework when binding promises to UI lifecycles.
- **R-ASYNC-002** MANDATORY: Import asynchronous helper primitives exclusively from `@opencode-ai/client/promise` when building context synchronization hooks or session actions.
- **R-ASYNC-003** MANDATORY: Ensure all asynchronous handlers integrate cleanly with reactive component cleanup functions to prevent state updates on unmounted views.

### Verify

```bash
# Discover and execute the project workspace verification script to run primary type validation across all application modules.
# Discover and execute the project linting and static analysis toolchain to verify that asynchronous client calls adhere to the @opencode-ai/client/promise import standard.
# Discover and execute the test runner suite to validate asynchronous promise handling and error propagation.
```

**Accept when:**
- All client context and UI components compile without type errors using `@opencode-ai/client/promise` for asynchronous operations.
- Static analysis passes with zero disallowed raw asynchronous transport imports in application modules.
- All unit and integration tests for session synchronization and client communication pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks, static analysis, and type verification enforce these rules. Violation handling results in automated pull request check failures and code review rejections.
</enforcement>