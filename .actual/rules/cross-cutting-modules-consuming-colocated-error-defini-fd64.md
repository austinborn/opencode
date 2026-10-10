# Colocated Internal Error Module (./error) Adoption: Modules Consuming Colocated Error Definitions Implement

These rules are ALWAYS ACTIVE for all internal functional domains, route utility modules, protocol handlers, and session services declaring custom failure states.

### Rules

- **R-COL-001** SHOULD: Modules consuming colocated error definitions SHOULD implement exhaustive type-safe pattern matching or discriminated union branching for all declared failure variants.

### Verify

```bash
# Discover and run the workspace static analysis and type verification script from the repository manifest
# Locate and run the dependency graph validation script defined in the project configuration
```

**Accept when:**
- All domain error definitions reside in colocated internal error modules without cross-boundary circular dependencies.
- Static type analysis passes with zero type errors across all consuming modules.
- Module boundaries correctly encapsulate private error variants and expose only necessary domain failure interfaces.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is enforced by automated dependency graph analysis and static type checking in continuous integration, as well as peer code review.
</enforcement>