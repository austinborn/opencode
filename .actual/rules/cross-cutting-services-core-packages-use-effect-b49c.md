# Adoption of Effect as Core Runtime and Effect Management Library: Services Core Packages Use Effect Library

These rules are ALWAYS ACTIVE for all workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

### Rules

- **R-EFF-001** MUST: Services and core packages MUST use the Effect library ecosystem for asynchronous effect modeling, structured failure channels, and cross-package platform integrations.
- **R-EFF-002** MANDATORY: Prior to writing code that uses a versioned library, discover the dependency manifest, identify the build tool, inspect the repository lock or resolution artifact for the exact resolved version, look up official documentation for that version, and confirm every API, class, or function exists in that version.
- **R-EFF-003** MANDATORY: When constructing service boundaries or interpreter workflows, compose operations through Effect combinator patterns rather than imperative error handling.
- **R-EFF-004** MANDATORY: Ensure that boundary crossing between external asynchronous APIs and internal Effect workflows explicitly maps untyped rejections into structured domain error types.

### Verify

```bash
# Discover and run the project static analysis and type verification script to ensure all Effect imports and combinator types resolve without errors.
# Discover and run the project test suite to validate that effect-based error channels and service runtimes execute as expected.
```

**Accept when:**
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, static analysis, and peer code reviews enforce these rules.
</enforcement>