# Adopt @opencode-ai/core/provider for Model Provider Domain Interfaces: Application Domain Layers Not Bypass Opencode

These rules are ALWAYS ACTIVE for all application services, server routing handlers, session message processors, agent client protocol coordinators, and provider error translators requiring model provider definitions.

### Rules

- **R-PROV-001** MUST_NOT: Application domain layers MUST NOT bypass the @opencode-ai/core/provider module to establish direct couplings to external model provider implementations.
- **R-PROV-002** MUST: Import model provider contracts, configurations, and utilities exclusively from @opencode-ai/core/provider when authoring session, routing, or agent logic.
- **R-PROV-003** MUST: Ensure provider error adapters map downstream provider failures into normalized error constructs defined by the core provider boundary.

### Verify

```bash
# Discover and execute the project static analysis and linting scripts to verify import boundary compliance across dependent packages.
# Discover and execute the repository test suite to confirm all provider integration points conform to core provider specifications.
```

**Accept when:**
- Static analysis validates that model provider access is routed through @opencode-ai/core/provider across all dependent modules.
- Automated unit and integration test suites pass without regressions across route handlers, session pipelines, and protocol adapters.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis, module boundary checks, and peer code review.
</enforcement>