# @opencode-ai/console-core Module Adoption for Domain Operations and Cryptographic Verification: Engineers Inspect Repository Lock Artifact Resolve

These rules are ALWAYS ACTIVE for all server-side route handlers, action handlers, and webhook receivers performing domain mutations or cryptographic verifications.

### Rules

- **R-CORE-001** MUST: Engineers MUST inspect the repository lock artifact to resolve the exact dependency version for @opencode-ai/console-core and its associated runtime packages before integrating or modifying module consumers.

### Verify

```bash
# Discover and execute project automated test suite and type checking/linting routines
# (Commands to be discovered from package manifest / repository scripts)
```

**Accept when:**
- All server route handlers and webhooks import domain operations and cryptographic utilities directly from @opencode-ai/console-core.
- Automated test suites and type-checking routines pass without type or signature mismatches.
- No route handler contains duplicate cryptographic verification algorithms or direct unvalidated persistence mutations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated CI pipelines and peer code reviews.
</enforcement>