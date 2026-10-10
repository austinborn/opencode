# Effect Library Adoption for Service Command Handlers: Command Handlers Managing Daemon Service Lifecycles

These rules are ALWAYS ACTIVE for command handlers managing daemon service lifecycles and CLI handlers interfacing with internal runtime and service modules.

### Rules

- **R-EFF-001** MUST: Command handlers managing daemon service lifecycles MUST coordinate asynchronous operations and service invocations through effect/Effect workflows.

### Verify

```bash
# Discover and run the project static analysis and type verification task
# Discover and execute the test runner suite
```

**Accept when:**
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis, linting, and peer code reviews verify adherence to Effect conventions.
</enforcement>