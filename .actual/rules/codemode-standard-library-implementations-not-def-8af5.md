# Internal Values Module Adoption for Runtime Value Representation: Standard Library Implementations Not Define Separate

These rules are ALWAYS ACTIVE for all standard library modules implementing runtime primitives, utility domains, and interpreter runtime definitions and execution model abstractions.

### Rules

- **R-VAL-001** MUST_NOT: Standard library implementations MUST NOT define separate internal representations for primitive or composite runtime values that bypass the shared values module.

### Verify

```bash
# Discover and execute workspace static analysis and type checking scripts across all standard library packages
# Discover and run the project automated test suite targeting standard library and interpreter modules
```

**Accept when:**
- Static type analysis passes with zero type errors across all standard library and interpreter modules importing the values module.
- All unit and integration test suites covering standard library operations and interpreter value conversions succeed without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, automated test workflows, and peer code review enforce adherence to shared values module usage across standard library changes.
</enforcement>