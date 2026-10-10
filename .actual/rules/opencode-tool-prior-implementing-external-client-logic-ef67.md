# @opencode-ai/plugin External Client Integration Pattern: Prior Implementing External Client Logic Consumers

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin and client boundaries dispatching HTTP requests to remote platform services.

### Rules

- **R-EXT-001** MUST: Prior to implementing external client logic, consumers MUST verify the active dependency manifest and inspect the repository lock artifact to ground the exact resolved version of @opencode-ai/plugin.
- **R-EXT-002** MUST: Execute lock-version grounding steps in order (find dependency manifest, identify build tool, inspect repository lock/resolution artifact, look up official documentation for that exact version, confirm API/class/function existence, re-run per dependency at point of use).
- **R-EXT-003** MUST: Construct client boundary helper functions that accept relative endpoint paths and standard request options, pre-populating authorization and media type headers.
- **R-EXT-004** MUST: Handle request header merging by converting incoming Header instances with object entry transformation prior to spreading defaults.

### Verify

```bash
# Discover and execute the project validation script from the dependency manifest to verify external client boundary compliance
# Run the repository test harness to confirm request header normalization and credential injection across client invocations
npm test
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis, repository test suites validating credential injection and header normalization, and peer code review for all new and modified plugin tool modules.
</enforcement>