# Effect Library Adoption for Service Command Handlers: Command Handlers Resolve Invoke Internal Daemon

These rules are ALWAYS ACTIVE for command handlers coordinating daemon service operations, operational status checks, and CLI handlers interfacing with internal runtime and service modules.

### Rules

- **R-EFF-001** MUST: Command handlers MUST resolve and invoke internal daemon services through Effect generator yield expressions rather than raw imperative calls.

### Verify

```bash
# Discover and run the project static analysis and type verification task
# Discover and execute the test runner suite to validate service lifecycle commands
```

**Accept when:**
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis and linting verification, as well as peer code reviews, are mandatory.
</enforcement>