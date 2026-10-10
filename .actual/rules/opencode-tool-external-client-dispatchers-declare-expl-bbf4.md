# @opencode-ai/plugin External Client Integration Pattern: External Client Dispatchers Declare Explicit Accept

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin and client boundaries dispatching HTTP requests to remote platform services.

### Rules

- **R-EXT-001** MUST: External client dispatchers MUST declare explicit Accept and Content-Type request headers according to target API specifications.

### Verify

```bash
# Discover and execute project validation script from dependency manifest
# Run repository test harness to confirm request header normalization and credential injection
npm test
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis, repository test suites, and peer code reviews.
</enforcement>