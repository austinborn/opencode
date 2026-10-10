# Adopt @opencode-ai/core/provider for Model Provider Domain Interfaces: Before Writing Modifying Code That Consumes

These rules are ALWAYS ACTIVE for all application services, server routing handlers, session message processors, agent client protocol coordinators, and provider error translators requiring model provider definitions.

### Rules

- **R-PROV-001** MUST: Before writing or modifying code that consumes the versioned dependency, developers MUST discover the dependency manifest and authoritative resolution artifact to verify the exact resolved version.
- **R-PROV-002** MUST: Import model provider contracts, configurations, and utilities exclusively from `@opencode-ai/core/provider` when authoring session, routing, or agent logic.
- **R-PROV-003** MUST: Ensure provider error adapters map downstream provider failures into normalized error constructs defined by the core provider boundary.

### Verify

```bash
# Discover and execute project static analysis and linting scripts to verify import boundary compliance
# Discover and execute the repository test suite to confirm all provider integration points conform to core provider specifications
```

**Accept when:**
- Static analysis validates that model provider access is routed through @opencode-ai/core/provider across all dependent modules.
- Automated unit and integration test suites pass without regressions across route handlers, session pipelines, and protocol adapters.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>