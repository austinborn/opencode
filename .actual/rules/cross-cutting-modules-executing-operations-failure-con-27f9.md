# Adoption of Effect as Core Runtime and Effect Management Library: Modules Executing Operations Failure Conditions Represent

These rules are ALWAYS ACTIVE for all workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

### Rules

- **R-EFF-001** MUST: Modules executing operations with failure conditions MUST represent errors through explicit Effect failure channels rather than untyped thrown runtime exceptions.

### Verify

```bash
# Discover and run the project static analysis and type verification script
# Discover and run the project test suite
```

**Accept when:**
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>