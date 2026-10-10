# Adoption of Effect as Core Runtime and Effect Management Library: Consumers Inspect Repository Dependency Resolution Artifact

These rules are ALWAYS ACTIVE for all workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

### Rules

- **R-EFF-001** MUST: Consumers MUST inspect the repository dependency resolution artifact to verify the exact locked version of the Effect library and its associated modules before introducing or invoking library APIs.
- **R-EFF-002** MUST: Execute the lock-version grounding sequence (discover dependency manifest, identify build tool, inspect repository lock artifact for exact resolved version, look up official documentation for that exact version, confirm every API exists in that version) before writing code that uses a versioned library.
- **R-EFF-003** MUST: Compose operations through Effect combinator patterns rather than imperative error handling when constructing service boundaries or interpreter workflows.
- **R-EFF-004** MUST: Ensure that boundary crossing between external asynchronous APIs and internal Effect workflows explicitly maps untyped rejections into structured domain error types.

### Verify

```bash
# Discover and run the project static analysis and type verification script
# (Command derived from project repository workspace scripts)
npm run check

# Discover and run the project test suite
# (Command derived from project repository workspace scripts)
npm test
```

**Accept when:**
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, static analysis, and peer code review enforce adherence to Effect error handling and boundary conventions.
</enforcement>