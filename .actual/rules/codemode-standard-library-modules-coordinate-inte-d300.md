# Internal Values Module Adoption for Runtime Value Representation: Standard Library Modules Coordinate Interpreter Model

These rules are ALWAYS ACTIVE for all standard library components, utility domains, interpreter runtime definitions, and execution model abstractions.

### Rules

- **R-IVM-001** MAY: Standard library modules MAY coordinate with the interpreter model and tool runtime modules when constructing higher-level invocation context.
- **R-IVM-002** MANDATORY: Standard library modules must import values module abstractions using internal relative import conventions established in the workspace package.
- **R-IVM-003** MANDATORY: When introducing a new standard library capability, map domain data structures to existing values module primitives rather than inventing custom container types.

### Verify

```bash
# Discover and run workspace static analysis and type checking scripts
# Discover and run automated test suite targeting standard library and interpreter modules
```

**Accept when:**
- Static type analysis passes with zero type errors across all standard library and interpreter modules importing the values module.
- All unit and integration test suites covering standard library operations and interpreter value conversions succeed without regression.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration type checking and peer code review enforce adherence to shared values module usage.
</enforcement>