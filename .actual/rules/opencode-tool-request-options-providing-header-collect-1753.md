# @opencode-ai/plugin External Client Integration Pattern: Request Options Providing Header Collections Normalize

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin and client boundaries dispatching HTTP requests to remote platform services.

### Rules

- **R-EXT-001** MUST: Request options providing header collections MUST normalize Header instances into plain object key-value pairs before merging with default client headers.

### Verify

```bash
# Discover and execute the project validation script from the dependency manifest to verify external client boundary compliance.
# Run the repository test harness to confirm request header normalization and credential injection across client invocations.
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis and repository test suites.
</enforcement>