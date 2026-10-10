# Adoption of @opencode-ai/client/promise for Client-Side Asynchronous Operations: Application Modules Initiating Coordinating Asynchronous Client

These rules are ALWAYS ACTIVE for all client application modules, context providers, synchronization controllers, session managers, and UI components performing asynchronous server communication.

### Rules

- **R-CLIENT-ASYNC-001** MUST: All application modules initiating or coordinating asynchronous client-to-server operations MUST execute those operations through the @opencode-ai/client/promise module rather than invoking raw transport promises directly.
- **R-CLIENT-ASYNC-002** EXCEPTIONS: Low-level transport adapters require direct raw socket or event stream initialization prior to client promise layer bootstrap (EXC-20-001).

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
Claude Code MUST NOT skip or defer verification. Automated continuous integration checks, static analysis, and mandatory peer code reviews verify that client asynchronous interactions route through @opencode-ai/client/promise.
</enforcement>