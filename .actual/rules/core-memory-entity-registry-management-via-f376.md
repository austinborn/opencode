# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Before Implementing Updating Dependencies Associated State

These rules are ALWAYS ACTIVE for all core domain services implementing in-memory entity registry management and state storage definitions.

### Rules

- **R-STATE-001** MUST: Before implementing or updating dependencies associated with state management or effect execution, the consumer MUST inspect the project lock artifact to resolve and verify the exact dependency version.
- **R-STATE-002** MUST: Encapsulate in-memory entity collection mutations using the `State.create` factory pattern with managed draft proxies rather than performing unconstrained direct mutations on shared collections.
- **R-STATE-003** MUST: Chain downstream domain event notification effects within the finalize callback of `State.create` to ensure systems react only after the draft transaction commits.

### Verify

```bash
# Discover and run the project test runner covering domain state registries
# Discover and run the project static type checker to verify zero compilation errors across domain state modules
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Static type analysis and automated unit/integration test runs in CI pipelines verify adherence, with direct collection mutations triggering pull request rejection and build failures.
</enforcement>