# Adoption of the Centralized Internal Stage Module for Infrastructure Definitions: Infrastructure Definition Modules Requiring Deployment Stage

These rules are ALWAYS ACTIVE for all infrastructure definition modules requiring deployment stage resolution or environment-specific configuration.

### Rules

- **R-INF-001** MUST: All infrastructure definition modules requiring deployment stage resolution or environment-specific configuration MUST import and utilize the centralized internal stage module as the authoritative source of stage context.

### Verify

```bash
# Discover the repository test runner from the project manifest and execute tests targeting infrastructure configuration modules
# Discover and execute the repository static analysis or linting tool to verify import patterns
```

**Accept when:**
- All infrastructure definition modules resolve stage parameters exclusively through the shared stage module interface.
- Static analysis verifies zero unauthorized stage resolution or ad-hoc environment parsing across infrastructure definitions.
- All automated configuration and deployment test suites pass without regression under stage-resolved parameterization.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>