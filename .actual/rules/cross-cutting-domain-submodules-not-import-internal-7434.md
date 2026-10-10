# Colocated Internal Error Module (./error) Adoption: Domain Submodules Not Import Internal Error

These rules are ALWAYS ACTIVE for all internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

### Rules

- **R-ERR-001** MUST_NOT: Domain submodules MUST NOT import internal error definitions across separate package boundaries or unrelated functional domains.

### Verify

```bash
# Discover the workspace static analysis and type verification script from the repository manifest and execute it
# Locate and run the dependency graph validation script defined in the project configuration
```

**Accept when:**
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated dependency graph analysis, static type checking, and peer code review enforce these rules.
</enforcement>