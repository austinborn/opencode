# Internal Values Module Adoption for Runtime Value Representation: Standard Library Modules Interpreter Runtime Representations

These rules are ALWAYS ACTIVE for standard library modules implementing runtime primitives and utility domains, and interpreter runtime definitions and execution model abstractions.

### Rules

- **R-VAL-001** MUST: Standard library modules and interpreter runtime representations MUST import and use the internal values module for all runtime value creation, conversion, and inspection.

### Verify

```bash
# Discover workspace static analysis and type checking scripts from repository configuration and execute them
# Discover and run the project automated test suite targeting standard library and interpreter modules
```

**Accept when:**
- Static type analysis passes with zero type errors across all standard library and interpreter modules importing the values module.
- All unit and integration test suites covering standard library operations and interpreter value conversions succeed without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking, automated test workflows, and peer code review enforce adherence to shared values module usage.
</enforcement>