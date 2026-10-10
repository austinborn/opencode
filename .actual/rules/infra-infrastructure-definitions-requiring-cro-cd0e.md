# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Infrastructure Definitions Requiring Cross Cutting Operational

These rules are ALWAYS ACTIVE for all infrastructure definition modules declaring environment-specific deployment resources, stacks, and internal modules coordinating service deployments and stage boundaries.

### Rules

- **R-INF-001** SHOULD: Infrastructure definitions requiring cross-cutting operational configuration SHOULD consume shared infrastructure modules rather than declaring disparate inline configurations.
- **R-INF-002** MANDATORY: The shared stage module MUST expose an immutable contract for stage names and stage-scoped contextual metadata.
- **R-INF-003** MANDATORY: Infrastructure components MUST be structured to accept resolved stage context parameters rather than attempting autonomous environment queries.

### Verify

```bash
# Discover the repository test runner from the project manifest and execute tests targeting infrastructure configuration modules to confirm stage resolution validity.
# Discover and execute the repository static analysis or linting tool to verify that all infrastructure definitions import stage context exclusively from the centralized stage module.
```

**Accept when:**
- All infrastructure definition modules resolve stage parameters exclusively through the shared stage module interface.
- Static analysis verifies zero unauthorized stage resolution or ad-hoc environment parsing across infrastructure definitions.
- All automated configuration and deployment test suites pass without regression under stage-resolved parameterization.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced via automated static analysis checks in continuous integration, peer architecture reviews on pull requests, and strict blocking of pull requests introducing independent stage parsing logic outside the shared module.
</enforcement>