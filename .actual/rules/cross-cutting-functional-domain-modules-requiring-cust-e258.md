# Colocated Internal Error Module (./error) Adoption: Functional Domain Modules Requiring Custom Error

These rules are ALWAYS ACTIVE for all internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

### Rules

- **R-ERR-001** MUST: Functional domain modules requiring custom error representations MUST define and encapsulate their failure types within a colocated internal error module.

### Verify

```bash
# Discover and execute workspace static analysis / type verification script
# Locate and run dependency graph validation script to verify no cyclic imports exist between error modules
```

**Accept when:**
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated dependency graph analysis and static type checking in continuous integration, along with peer code review, verify adherence.
</enforcement>