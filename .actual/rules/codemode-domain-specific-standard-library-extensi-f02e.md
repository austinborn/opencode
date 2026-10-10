# Internal Values Module Adoption for Runtime Value Representation: Domain Specific Standard Library Extensions Isolate

These rules are ALWAYS ACTIVE for standard library modules implementing runtime primitives, utility domains, and interpreter runtime definitions and execution model abstractions.

### Rules

- **R-VAL-001** SHOULD: Domain-specific standard library extensions SHOULD isolate domain logic from low-level serialization by delegating value wrapping and unwrapping to the values module interface.

### Verify

```bash
# Discover the workspace static analysis and type checking scripts from repository configuration and execute them across all standard library packages.
# Discover and run the project automated test suite targeting standard library and interpreter modules to verify runtime value compatibility.
```

**Accept when:**
- Static type analysis passes with zero type errors across all standard library and interpreter modules importing the values module.
- All unit and integration test suites covering standard library operations and interpreter value conversions succeed without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>