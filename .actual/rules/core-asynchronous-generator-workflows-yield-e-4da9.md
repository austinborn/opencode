# Effect Library for Core Domain Service Orchestration: Asynchronous Generator Workflows Yield Effect Computations

These rules are ALWAYS ACTIVE for all core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling.

### Rules

- **R-EFF-001** MUST: Asynchronous generator workflows MUST yield effect computations using the yield star operator inside Effect generator functions to compose multi-step domain workflows.

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