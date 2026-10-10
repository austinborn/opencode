# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Infrastructure Definition Modules Not Implement Independent

These rules are ALWAYS ACTIVE for all infrastructure definition modules declaring environment-specific deployment resources and stacks, and all internal modules coordinating service deployments and stage boundaries.

### Rules

- **R-INFRA-001** MUST_NOT: Infrastructure definition modules MUST NOT implement independent stage detection routines, parse raw environment flags, or duplicate stage defaulting logic outside the centralized stage module.

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
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks in continuous integration verifying import patterns within infrastructure definitions, and peer architecture review on pull requests touching infrastructure definition files.
</enforcement>