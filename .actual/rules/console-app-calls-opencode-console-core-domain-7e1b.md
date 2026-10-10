# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Calls Opencode Console Core Domain Operations

These rules are ALWAYS ACTIVE for all server-side data loaders, query functions, workspace management, billing, member administration, resource configuration workflows, server actions, and mutation handlers modifying workspace domain state.

### Rules

- **R-OPENC_CORE-001** SHOULD: Calls to @opencode-ai/console-core domain operations in route handlers SHOULD execute inside actor context wrappers to ensure tenant workspace scoping and identity validation.

### Verify

```bash
# Discover workspace dependency resolution artifact and run typecheck
# Discover and run test suite covering workspace route data loaders and domain integration points
# Discover and execute repository import linting script to ensure no direct database connections exist in route components
```

**Accept when:**
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration typecheck, build validation scripts, and static analysis import boundary rules enforce these domain rules.
</enforcement>