# @playwright/test Integration Testing and Lifecycle Probing: Performance Profiling Probes Executing Inside Browser

These rules are ALWAYS ACTIVE for automated browser performance benchmarking scripts, end-to-end integration test suites, and synthetic evaluation probes measuring DOM rendering and timeline performance.

### Rules

- **R-PRF-001** SHOULD: Performance profiling probes executing inside browser evaluation contexts record frame metrics, mutation observations, and layout shifts using standard browser performance interfaces.
- **R-PRF-002** MANDATORY: The consumer MUST discover dependency manifests, build tools, and lock/resolution artifacts from the project repository to ground library versions before writing code using versioned libraries.
- **R-PRF-003** MANDATORY: Expose performance probe states through isolated window-scoped benchmark objects rather than component props or application stores.
- **R-PRF-004** MANDATORY: Structure integration performance probes to sample layout shifts and long tasks during live streaming intervals.

### Verify

```bash
# Discover and run the project test runner for end-to-end integration and performance suites.
# Execute the repository code quality and static analysis scripts to verify test boundary separation.
```

**Accept when:**
- All automated integration and performance test suites pass without timing regressions or frame drops.
- Static analysis confirms zero test harness dependencies are present within production component bundles.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>