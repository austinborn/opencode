# @opencode-ai/plugin External Client Integration Pattern: External Client Dispatchers Source Authentication Credentials

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin.

### Rules

- **R-EXT-001** MUST: External client dispatchers MUST source authentication credentials exclusively from runtime environment configuration and inject them via Bearer token authorization headers.

### Verify

```bash
# Discover and execute the project validation script from the dependency manifest to verify external client boundary compliance
# Run the repository test harness to confirm request header normalization and credential injection across client invocations
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>