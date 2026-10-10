# Effect Functional Effect System Adoption for CLI Command Handlers: Developers Discover Project Dependency Manifest Lock

These rules are ALWAYS ACTIVE for command handlers coordinating daemon service lifecycles, service status inquiries, system process state, and submodules within the CLI interface layer invoking background daemon services.

### Rules

- **R-EFF-001** MUST: Developers MUST discover the project dependency manifest and lock artifact to resolve the exact locked version of the Effect library before writing or updating handler implementations.

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
Claude Code MUST NOT skip or defer verification. Continuous integration type checks, automated unit and integration test runs, and peer code review enforce adherence to Effect generator conventions and runtime boundary separation.
</enforcement>