# Adopt @opencode-ai/core/provider for Model Provider Domain Interfaces: Specialized Protocol Adapters Transport Bridges Compose

These rules are ALWAYS ACTIVE for all application services, server routing handlers, session message processors, agent client protocol coordinators, and provider error translators requiring model provider definitions.

### Rules

- **R-PROV-001** MAY: Specialized protocol adapters and transport bridges MAY compose @opencode-ai/core/provider contracts with domain-specific protocol state machines.
- **R-PROV-002** MUST: Import model provider contracts, configurations, and utilities exclusively from @opencode-ai/core/provider when authoring session, routing, or agent logic.
- **R-PROV-003** MUST: Ensure provider error adapters map downstream provider failures into normalized error constructs defined by the core provider boundary.
- **R-PROV-004** MUST: Execute lock-version grounding before writing code that uses a versioned library: find manifest, identify build tool, inspect lock/resolution artifact for exact version, look up official documentation for that exact version, and confirm every API exists.

### Verify

```bash
# Discover and execute the project static analysis and linting scripts to verify import boundary compliance across dependent packages.
# Discover and execute the repository test suite to confirm all provider integration points conform to core provider specifications.
```

**Accept when:**
- Static analysis validates that model provider access is routed through @opencode-ai/core/provider across all dependent modules.
- Automated unit and integration test suites pass without regressions across route handlers, session pipelines, and protocol adapters.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration builds fail upon detecting unauthorized direct provider imports outside designated modules.
</enforcement>