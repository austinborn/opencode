# Effect Library Adoption for Service Command Handlers: Consumers Discover Project Dependency Manifest Verify

These rules are ALWAYS ACTIVE for all CLI command handlers coordinating daemon service operations, operational status checks, and internal runtime interactions.

### Rules

- **R-EFF-001** MUST: Consumers MUST discover the project dependency manifest and verify the resolved lock version for effect/Effect before authoring or modifying command workflows.

### Verify

```bash
# Discover and run the project static analysis and type verification task
# Discover and execute the test runner suite
```

**Accept when:**
- All command handlers pass static type analysis with fully resolved effect/Effect types and runtime imports.
- Integration and unit test suites execute successfully with service lifecycle commands yielding expected effects without unhandled errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static type analysis and peer code reviews enforce compliance.
</enforcement>