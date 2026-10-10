# Effect Library for Core Domain Service Orchestration: Core Service Modules Not Introduce Standalone

These rules are ALWAYS ACTIVE for core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling.

### Rules

- **R-EFF-001** SHOULD NOT: Core service modules SHOULD NOT introduce standalone asynchronous promise chains when equivalent compositional pipelines can be expressed within the Effect runtime.
- **R-EFF-002** MUST: Ensure all effectful domain routines are encapsulated within generator functions to maintain consistent execution ergonomics and typed error propagation.
- **R-EFF-003** MUST: When integrating external promise-based libraries, wrap external calls at the boundary into managed effect structures before passing them to internal service pipelines.
- **R-EFF-004** MUST: Execute lock-version grounding before writing code that uses a versioned library by discovering the manifest, build tool, and lock artifact to determine the exact resolved version, and verify all API usages against that exact version's documentation.

### Verify

```bash
# Discover repository manifest and execute project type checking across core workspace packages
# Discover repository test runner and execute core domain workflow test suites
```

**Accept when:**
- All core domain services compile without type errors using the resolved Effect library version.
- All effectful workflow tests pass with proper error channel and defect assertions.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration and peer code reviews enforce these rules, blocking pull requests that introduce unmanaged promise chains.
</enforcement>