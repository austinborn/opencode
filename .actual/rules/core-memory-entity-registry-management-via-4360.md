# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Domain Services Not Expose Raw Internal

These rules are ALWAYS ACTIVE for all core domain services and in-memory entity registry management modules.

### Rules

- **R-STATE-001** MUST_NOT: Domain services MUST NOT expose raw internal collection references directly to external consumers without conversion to immutable representations or read-only views.
- **R-STATE-002** MANDATORY: When constructing initial state instances, initialize typed map collections to hold domain entries, ensuring draft definitions supply type-safe accessor and mutator delegates.
- **R-STATE-003** MANDATORY: For services publishing domain events, chain notification effects within the finalize callback to ensure downstream systems react only after the draft transaction commits.

### Verify

```bash
# Discover and execute the project test runner for the core package unit test suite covering domain state registries.
# Discover and execute the project static type checker to verify zero compilation errors across domain state modules.
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Static analysis failure and pull request review blocks are strictly enforced for non-conforming state patterns.
</enforcement>