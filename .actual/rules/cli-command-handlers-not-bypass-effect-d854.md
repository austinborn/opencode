# Effect Functional Effect System Adoption for CLI Command Handlers: Command Handlers Not Bypass Effect Runtime

These rules are ALWAYS ACTIVE for command line interface handlers and submodules coordinating background daemon services and local system processes.

### Rules

- **R-EFF-001** MUST_NOT: Command handlers MUST NOT bypass Effect runtime execution boundaries to invoke daemon control operations through raw asynchronous promises.

### Verify

```bash
# Discover and run the project type-checking task
# Discover and execute the project test suite covering CLI command handlers
# Discover and run the project static analysis lint script
```

**Accept when:**
- All CLI command handlers compile successfully against the resolved Effect library types without type errors.
- Service command test suites pass, demonstrating proper lifecycle transitions during daemon operations.
- Static verification confirms zero violations regarding bypassed effect boundaries in command modules.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>