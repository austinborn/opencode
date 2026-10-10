# @opencode-ai/plugin External Client Integration Pattern: External Client Implementations Not Embed Static

These rules are ALWAYS ACTIVE for all tool and plugin modules implementing external API integrations with @opencode-ai/plugin and client boundaries dispatching HTTP requests to remote platform services.

### Rules

- **R-ECI-001** MUST_NOT: External client implementations MUST_NOT embed static credentials in source code or bypass required authorization and content headers.

### Verify

```bash
# Discover and execute the project validation script from the dependency manifest
# Run the repository test harness to confirm request header normalization and credential injection
```

**Accept when:**
- All external client boundary invocations consistently inject required authorization headers and normalize header instances prior to dispatch.
- Repository test suites and validation scripts pass with zero unresolved external client boundary violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and test suites enforce compliance.
</enforcement>