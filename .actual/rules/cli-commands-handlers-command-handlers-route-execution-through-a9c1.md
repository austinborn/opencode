# Effect Library Adoption for Service Command Handlers: Command Handlers Route Execution Through Shared

These rules are ALWAYS ACTIVE for all CLI command handlers coordinating daemon service operations and operational status checks, or interfacing with internal runtime and service modules.

### Rules

- **R-CH-001** SHOULD: Command handlers SHOULD route execution through the shared application runtime rather than bootstrapping custom execution environments.

### Verify

```bash
# Discover and run project static analysis and type verification task
# Discover and execute test runner suite
```

**Accept when:**
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis and linting verification, alongside peer code reviews, are mandatory.
</enforcement>