# @opencode-ai/console-core Module Adoption for Domain Operations and Cryptographic Verification: Route Handlers Not Execute Direct Persistence

These rules are ALWAYS ACTIVE for server-side route handlers, action handlers, and webhook receivers performing domain mutations or cryptographic verifications.

### Rules

- **R-CORE-001** MUST_NOT: Route handlers MUST_NOT execute direct persistence mutations or duplicate domain business validation outside the interfaces provided by @opencode-ai/console-core submodules.

### Verify

```bash
# Discover and execute the project automated test suite to confirm all route handlers interacting with the core module pass behavioral assertions.
# Discover and run the repository type-checking routine to verify type compatibility with core module subpath exports.
# Discover and run the repository linting script to ensure no inline cryptographic routines or direct persistence access bypass the core library.
```

**Accept when:**
- All server route handlers and webhooks import domain operations and cryptographic utilities directly from @opencode-ai/console-core.
- Automated test suites and type-checking routines pass without type or signature mismatches.
- No route handler contains duplicate cryptographic verification algorithms or direct unvalidated persistence mutations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline executing type checks and unit test suites, as well as peer code reviews on all pull requests introducing or modifying server route handlers.
</enforcement>