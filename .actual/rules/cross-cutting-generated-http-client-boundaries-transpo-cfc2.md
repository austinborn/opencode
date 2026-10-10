# Adoption of Effect as Core Runtime and Effect Management Library: Generated Http Client Boundaries Transport Layers

These rules are ALWAYS ACTIVE for all workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

### Rules

- **R-EFF-001** SHOULD: Generated HTTP client boundaries and transport layers SHOULD use Effect HTTP and encoding modules to maintain typed service contracts.
- **R-EFF-002** MANDATORY: Discover the dependency manifest, build tool, and lock/resolution artifact in the repository to determine exact resolved versions before writing code that uses a versioned library. Look up official documentation for that exact version.
- **R-EFF-003** MANDATORY: When constructing service boundaries or interpreter workflows, compose operations through Effect combinator patterns rather than imperative error handling.
- **R-EFF-004** MANDATORY: Ensure that boundary crossing between external asynchronous APIs and internal Effect workflows explicitly maps untyped rejections into structured domain error types.

### Verify

```bash
# Discover and run the project static analysis and type verification script
# Discover and run the project test suite to validate effect-based error channels
```

**Accept when:**
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Pull requests introducing raw unhandled promises or throwing untyped exceptions in Effect-governed modules are blocked pending remediation.
</enforcement>