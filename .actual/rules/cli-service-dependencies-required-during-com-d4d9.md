# Effect Functional Effect System Adoption for CLI Command Handlers: Service Dependencies Required During Command Execution

These rules are ALWAYS ACTIVE for command handlers coordinating daemon service lifecycles, service status inquiries, and system process state, as well as submodules within the CLI interface layer invoking background daemon services.

### Rules

- **R-CLI-001** MUST: Service dependencies required during command execution MUST be acquired via Effect generator yielding rather than direct singleton instantiation.

### Verify

```bash
# Discover and run the project type-checking task to confirm that all Effect types and service yields resolve without compilation errors.
# Discover and execute the project test suite covering CLI command handlers to verify that daemon service lifecycles behave as expected under the Effect runtime.
# Discover and run the project static analysis lint script to ensure no forbidden asynchronous patterns bypass the defined effect boundaries.
```

**Accept when:**
- All CLI command handlers compile successfully against the resolved Effect library types without type errors.
- Service command test suites pass, demonstrating proper lifecycle transitions during daemon operations.
- Static verification confirms zero violations regarding bypassed effect boundaries in command modules.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via type checks, automated test suites, and static analysis.
</enforcement>