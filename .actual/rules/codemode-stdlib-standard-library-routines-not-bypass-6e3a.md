# Adoption of Internal Interpreter Model Module for Standard Library Implementations: Standard Library Routines Not Bypass Internal

These rules are ALWAYS ACTIVE for implementation and maintenance of runtime standard library components, bridging domain-specific standard library functions to interpreter execution state.

### Rules

- **R-STDLIB-001** MUST_NOT: Standard library routines MUST NOT bypass the internal interpreter model module to manipulate engine evaluation state directly.

### Verify

```bash
# Discover and execute the project unit and integration test suite targeting standard library implementations.
# Execute repository static analysis and architectural lint checks to verify adherence to module import boundaries.
```

**Accept when:**
- All standard library tests execute successfully against the internal interpreter model interface without regressions.
- Static module dependency checks confirm no standard library module bypasses the interpreter model module.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>