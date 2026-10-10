# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Before Implementing Updating Dependencies Within Infrastructure

These rules are ALWAYS ACTIVE for all infrastructure definition modules declaring environment-specific deployment resources, stacks, and internal modules coordinating service deployments and stage boundaries.

### Rules

- **R-INF-001** MUST: Before implementing or updating dependencies within infrastructure modules, the consumer MUST inspect the repository lock artifact to determine the exact resolved dependency versions.
- **R-INF-002** MANDATORY: Discover the repository test runner from the project manifest and execute tests targeting infrastructure configuration modules to confirm stage resolution validity.
- **R-INF-003** MANDATORY: Discover and execute the repository static analysis or linting tool to verify that all infrastructure definitions import stage context exclusively from the centralized stage module.

### Verify

```bash
# Discover and execute the test runner for infrastructure configuration modules
# Discover and execute the static analysis or linting tool to verify import patterns
```

**Accept when:**
- All infrastructure definition modules resolve stage parameters exclusively through the shared stage module interface.
- Static analysis verifies zero unauthorized stage resolution or ad-hoc environment parsing across infrastructure definitions.
- All automated configuration and deployment test suites pass without regression under stage-resolved parameterization.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and architecture reviews enforce this rule.
</enforcement>