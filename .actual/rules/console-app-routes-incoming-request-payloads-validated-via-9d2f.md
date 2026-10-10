# @opencode-ai/console-core Module Adoption for Domain Operations and Cryptographic Verification: Incoming Request Payloads Validated Via Schema

These rules are ALWAYS ACTIVE for server-side route handlers, action handlers, and webhook receivers performing domain mutations or cryptographic verifications.

### Rules

- **R-CORE-001** MUST: Incoming request payloads MUST be validated via schema definitions prior to invoking domain operations exposed by @opencode-ai/console-core.

### Verify

```bash
# Discover and execute project test suite for route handlers
npm test

# Run repository type-checking routine
npm run typecheck

# Run repository linting script
npm run lint
```

**Accept when:**
- All server route handlers and webhooks import domain operations and cryptographic utilities directly from @opencode-ai/console-core.
- Automated test suites and type-checking routines pass without type or signature mismatches.
- No route handler contains duplicate cryptographic verification algorithms or direct unvalidated persistence mutations.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests containing inline domain mutations or unvetted cryptographic algorithms will be rejected during code review, and continuous integration failures on type checks or tests will block merging.
</enforcement>