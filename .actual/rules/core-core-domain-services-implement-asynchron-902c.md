# Effect Library for Core Domain Service Orchestration: Core Domain Services Implement Asynchronous Operations

These rules are ALWAYS ACTIVE for core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling.

### Rules

- **R-COR-001** MUST: Core domain services MUST implement asynchronous operations, time resolution, and fallible control flows using the Effect library rather than raw unmanaged promises.

### Verify

```bash
# Discover repository manifest and execute project type checking across core workspace packages
# Discover repository test runner and execute core domain workflow test suites
```

**Accept when:**
- All core domain services compile without type errors using the resolved Effect library version.
- All effectful workflow tests pass with proper error channel and defect assertions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification of Effect library compliance via type checking and linting pipelines is mandatory.
</enforcement>