# Internal Values Module Adoption for Runtime Value Representation: Consumers Inspect Repository Dependency Manifest Authoritative

These rules are ALWAYS ACTIVE for standard library modules implementing runtime primitives, utility domains, and interpreter runtime definitions and execution model abstractions.

### Rules

- **R-VAL-001** MUST: Consumers MUST inspect the repository dependency manifest and authoritative lock artifact to resolve all runtime dependency versions before integrating module extensions.
- **R-VAL-002** MUST: Standard library modules must import values module abstractions using internal relative import conventions established in the workspace package.
- **R-VAL-003** MUST: When introducing a new standard library capability, map domain data structures to existing values module primitives rather than inventing custom container types.
- **R-VAL-004** MUST: Before writing code that uses a versioned library, execute in order: find the dependency manifest, identify the build tool, inspect the lock/resolution artifact for exact versions, look up official documentation for that exact version, confirm every API exists in that version, and re-verify per dependency at the point of use for version-sensitive behavior.

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