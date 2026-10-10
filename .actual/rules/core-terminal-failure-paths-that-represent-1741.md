# Effect Library for Core Domain Service Orchestration: Terminal Failure Paths That Represent Unrecoverable

These rules are ALWAYS ACTIVE for all core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling within core service boundaries.

### Rules

- **R-EFF-001** MUST: Terminal failure paths that represent unrecoverable defects or invariant violations MUST use Effect.orDie to ensure fail-stop execution boundaries.

### Verify

```bash
# Discover repository manifest and execute project type checking across core workspace packages
# Discover repository test runner and execute core domain workflow test suites
```

**Accept when:**
- All core domain services compile without type errors using the resolved Effect library version.
- All effectful workflow tests pass with proper error channel and defect assertions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated continuous integration type checking, linting pipelines, and peer code review.
</enforcement>