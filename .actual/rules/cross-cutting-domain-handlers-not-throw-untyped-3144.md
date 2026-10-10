# Colocated Internal Error Module (./error) Adoption: Domain Handlers Not Throw Untyped Strings

These rules are ALWAYS ACTIVE for all internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

### Rules

- **R-COL-001** MUST_NOT: Domain handlers MUST NOT throw untyped strings or unstructured generic exceptions across module boundaries.

### Verify

```bash
# Discover the workspace static analysis and type verification script from the repository manifest and execute it to ensure error type exhaustiveness.
# Locate and run the dependency graph validation script defined in the project configuration to verify no cyclic imports exist between error modules.
```

**Accept when:**
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated dependency graph analysis and static type checking in continuous integration enforce these constraints.
</enforcement>