# Colocated Internal Error Module (./error) Adoption: Domain Services Export Structured Error Constructors

These rules are ALWAYS ACTIVE for all internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

### Rules

- **R-ERR-001** SHOULD: Domain services SHOULD export structured error constructors that preserve cause hierarchies and contextual diagnostic metadata.

### Verify

```bash
# Discover and run the workspace static analysis and type verification script
# Locate and run the dependency graph validation script to verify no cyclic imports exist
```

**Accept when:**
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated dependency graph analysis, static type checking, and peer code review.
</enforcement>