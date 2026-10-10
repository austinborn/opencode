# Effect Library for Core Domain Service Orchestration: Engineers Discover Ecosystem Lock Artifact Within

These rules are ALWAYS ACTIVE for core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling.

### Rules

- **R-EFF-001** MUST: Engineers MUST discover the ecosystem lock artifact within the repository and verify the exact resolved version of the Effect library before implementing or modifying effect-based workflows.

### Verify

```bash
# Discover repository manifest and execute project type checking across core workspace packages
# Discover repository test runner and execute core domain workflow test suites
```

**Accept when:**
- All core domain services compile without type errors using the resolved Effect library version.
- All effectful workflow tests pass with proper error channel and defect assertions.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>