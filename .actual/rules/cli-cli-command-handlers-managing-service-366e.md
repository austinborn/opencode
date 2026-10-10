# Effect Functional Effect System Adoption for CLI Command Handlers: Cli Command Handlers Managing Service Interactions

These rules are ALWAYS ACTIVE for command line operations interacting with background daemon services and submodules within the CLI interface layer invoking background daemon services.

### Rules

- **R-CLI-001** MUST: CLI command handlers managing service interactions MUST encapsulate all side-effecting asynchronous operations within Effect workflows.

### Verify

```bash
# Discover and run project type-checking task
# Discover and execute project test suite covering CLI command handlers
# Discover and run project static analysis lint script
```

**Accept when:**
- All CLI command handlers compile successfully against the resolved Effect library types without type errors.
- Service command test suites pass, demonstrating proper lifecycle transitions during daemon operations.
- Static verification confirms zero violations regarding bypassed effect boundaries in command modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checks, automated test suites, and peer code review verify full Effect signature compliance across command modules.
</enforcement>