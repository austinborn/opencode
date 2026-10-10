# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Entity Mutations Executed Through Draft Callback

These rules are ALWAYS ACTIVE for all core domain services, in-memory entity registries, and state storage implementations requiring atomic updates and finalization dispatch.

### Rules

- **R-STATE-001** MUST: Entity mutations MUST be executed through the draft callback interface, exposing update and removal operations that operate strictly on draft proxies.

### Verify

\`\`\`bash
# Discover the project test runner and execute the core package unit test suite covering domain state registries.
# Discover the project static type checker and verify zero compilation errors across domain state modules.
\`\``

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Static type analysis and automated unit and integration tests verify compliance.
</enforcement>