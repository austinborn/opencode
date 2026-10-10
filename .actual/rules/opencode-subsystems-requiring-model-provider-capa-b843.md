# Adopt @opencode-ai/core/provider for Model Provider Domain Interfaces: Subsystems Requiring Model Provider Capabilities Metadata

These rules are ALWAYS ACTIVE for all application services, server routing handlers, session message processors, agent client protocol coordinators, and provider error translators requiring model provider definitions.

### Rules

- **R-PROV-001** MUST: Subsystems requiring model provider capabilities, metadata, or contracts MUST consume provider definitions exclusively through the @opencode-ai/core/provider module.

### Verify

```bash
# Discover and execute the project static analysis, linting scripts, and test suites to verify import boundary compliance and provider integration points.
# (Exact commands must be derived from the project repository configuration)
```

**Accept when:**
- Static analysis validates that model provider access is routed through @opencode-ai/core/provider across all dependent modules.
- Automated unit and integration test suites pass without regressions across route handlers, session pipelines, and protocol adapters.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds fail upon detecting unauthorized direct provider imports outside designated modules.
</enforcement>