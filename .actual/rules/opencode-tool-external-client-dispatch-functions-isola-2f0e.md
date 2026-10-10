# @opencode-ai/plugin External Client Integration Pattern: External Client Dispatch Functions Isolate Remote

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin.

### Rules

- **R-EXT-001** SHOULD: External client dispatch functions SHOULD isolate remote endpoint routing and option merging to prevent repetitive request boilerplate across tool definitions.

### Verify

```bash
# Discover and execute the project validation script from the dependency manifest to verify external client boundary compliance.
# Run the repository test harness to confirm request header normalization and credential injection across client invocations.
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis, repository test suites, and peer code reviews verify external request dispatch conventions and credential injection.
</enforcement>