# @opencode-ai/console-core Module Adoption for Domain Operations and Cryptographic Verification: Cryptographic Token Signature Verifications Incoming Request

These rules are ALWAYS ACTIVE for server-side route handlers, action handlers, and webhook receivers performing domain mutations or cryptographic verifications.

### Rules

- **R-CORE-001** MUST: Cryptographic token and signature verifications on incoming request headers MUST delegate directly to @opencode-ai/console-core/util/crypto.js.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration and peer code reviews.
</enforcement>