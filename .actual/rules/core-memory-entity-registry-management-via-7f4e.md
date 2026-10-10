# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Domain Services Not Implement Custom External

These rules are ALWAYS ACTIVE for all core domain service files and in-memory registry state management modules.

### Rules

- **R-STATE-001** SHOULD NOT: Domain services SHOULD NOT implement custom external mutation synchronization wrappers where State.create draft semantics already provide isolation.
- **R-STATE-002** MANDATORY: When constructing initial state instances, initialize typed map collections to hold domain entries, ensuring draft definitions supply type-safe accessor and mutator delegates.
- **R-STATE-003** MANDATORY: For services publishing domain events, chain notification effects within the finalize callback to ensure downstream systems react only after the draft transaction commits.
- **R-STATE-004** MANDATORY (DISCOVERY POLICY): The consumer MUST discover the build tool, package manager, test runner, and static type checker from the project repository rather than assuming tool or file names.
- **R-STATE-005** MANDATORY (LOCK-VERSION GROUNDING): Before writing code using a versioned library, inspect the dependency manifest, identify the build tool, inspect the resolution artifact for the exact version, lookup official docs for that version, and confirm every called API exists in that exact version.

### Verify

```bash
# Discover and execute the project test runner covering domain state registries
# Discover and execute the project static type checker verifying zero compilation errors across domain state modules
```

**Accept when:**
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via static type analysis, automated tests, and architectural review. Direct collection mutations will cause pull request rejection and build failures.
</enforcement>