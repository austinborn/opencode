# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Client Side Component Rendering Logic Not

These rules are ALWAYS ACTIVE for all application route components, server-side data loaders, query functions, and server actions interacting with workspace, billing, member, and provider domain models.

### Rules

- **R-CC-001** MUST_NOT: Client-side component rendering logic MUST_NOT invoke @opencode-ai/console-core database transactions directly outside server-side execution boundaries.

### Verify

```bash
# Discover workspace dependency resolution artifact and run project typecheck
# (Command discovered from repository manifests)
# Run project test suite covering workspace route data loaders and domain integration points
# Run repository import linting script to ensure no direct database connections exist in route components
```

**Accept when:**
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory and enforced via continuous integration typecheck, build validation, and static analysis import boundary rules.
</enforcement>