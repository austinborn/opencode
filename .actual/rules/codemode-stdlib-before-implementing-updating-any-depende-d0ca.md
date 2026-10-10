# Adoption of Internal Interpreter Model Module for Standard Library Implementations: Before Implementing Updating Any Dependency Integration

These rules are ALWAYS ACTIVE for implementation and maintenance of runtime standard library components, bridging domain-specific standard library functions to interpreter execution state, and before implementing or updating any dependency integration.

### Rules

- **R-STD-001** MUST: Before implementing or updating any dependency integration, the consumer MUST inspect the repository lock artifact to determine the exact resolved dependency versions.
- **R-STD-002** DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.
- **R-STD-003** LOCK-VERSION GROUNDING (MANDATORY): Before writing code that uses a versioned library, execute in order: 1. Find the dependency manifest in the repo. It declares ranges, not installed versions. 2. Identify the build tool from the manifest. 3. Inspect the repository lock or resolution artifact to determine the exact resolved version. 4. Look up official documentation, changelog, or public API reference for that exact version. 5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it. 6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- **R-STD-004** MUST: Standard library additions must locate the internal interpreter model module declarations within the project repository and adhere to established runtime binding signatures.
- **R-STD-005** MUST: When defining new standard library modules, ensure value conversions adhere to runtime context rules provided by the core interpreter model module.

### Verify

```bash
# Discover and execute the project unit and integration test suite targeting standard library implementations
# Execute repository static analysis and architectural lint checks to verify adherence to module import boundaries
```

**Accept when:**
- All standard library tests execute successfully against the internal interpreter model interface without regressions.
- Static module dependency checks confirm no standard library module bypasses the interpreter model module.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated continuous integration test pipelines and architectural dependency lint rules verify standard library contracts, and violations will be rejected.
</enforcement>