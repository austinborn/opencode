# @playwright/test Integration Testing and Lifecycle Probing: Component Lifecycle Handlers Not Rely Ambiguous

These rules are ALWAYS ACTIVE for automated browser performance benchmarking scripts, end-to-end integration test suites, and synthetic evaluation probes measuring DOM rendering and timeline performance.

### Rules

- **R-PLW-001** MUST_NOT: Component lifecycle handlers MUST NOT rely on ambiguous lifecycle initiation signatures to couple presentation components with integration test runners.

### Verify

```bash
# Discover and run the project test runner for end-to-end integration and performance suites
# Execute the repository code quality and static analysis scripts to verify test boundary separation
npm test -- --grep "integration|performance"
npm run lint
```

**Accept when:**
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated continuous integration pipeline checks and peer code review.
</enforcement>