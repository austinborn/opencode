# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Core Service Runtime Implementations Protocol Endpoint

These rules are ALWAYS ACTIVE for all core service runtime implementations and protocol endpoint declarations.

### Rules

- **R-EFF-001** MUST: All core service runtime implementations and protocol endpoint declarations MUST use the Effect library ecosystem for asynchronous effect modeling, state synchronization, and declarative HTTP route definitions.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute type-checking across workspace packages
# Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass
```

**Accept when:**
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests and code modifications must adhere to Effect primitives, and violations will be blocked by automated CI and architectural peer reviews.
</enforcement>