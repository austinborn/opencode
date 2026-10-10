# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Any Newly Introduced Infrastructure Definition Module

These rules are ALWAYS ACTIVE for all infrastructure definition modules declaring environment-specific deployment resources and stacks, and internal modules coordinating service deployments and stage boundaries.

### Rules

- **R-INF-001** MUST: Any newly introduced infrastructure definition module MUST bind its deployment lifecycle and resource naming conventions to the stage identifier provided by the centralized stage module.

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
Claude Code MUST NOT skip or defer verification. All infrastructure definitions must be verified using the repository's discovered test runner and static analysis tools.
</enforcement>