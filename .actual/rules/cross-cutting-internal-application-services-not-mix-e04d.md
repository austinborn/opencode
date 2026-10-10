# Adoption of Effect as Core Runtime and Effect Management Library: Internal Application Services Not Mix Disparate

These rules are ALWAYS ACTIVE for all workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

### Rules

- **R-EFF-001** MUST_NOT: Internal application services MUST NOT mix disparate asynchronous control flow primitives when orchestrating pipelines governed by Effect runtime scopes.

### Verify

```bash
# Discover and run the project static analysis and type verification script to ensure all Effect imports and combinator types resolve without errors.
# Discover and run the project test suite to validate that effect-based error channels and service runtimes execute as expected.
```

**Accept when:**
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, static analysis workflows, and peer code reviews enforce adherence to Effect error handling and boundary conventions.
</enforcement>