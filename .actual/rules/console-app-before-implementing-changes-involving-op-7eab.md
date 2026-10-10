# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Before Implementing Changes Involving Opencode Console

These rules are ALWAYS ACTIVE for all server-side data loaders, query functions, server actions, mutation handlers, and workspace/billing/member administration workflows involving @opencode-ai/console-core and its peer dependencies.

### Rules

- **R-OPENC-001** MUST: Before implementing changes involving @opencode-ai/console-core or its peer dependencies, developers MUST discover the dependency manifest and workspace lock artifact to resolve and align exact module versions across workspace packages.

### Verify

```bash
# Discover the workspace dependency resolution artifact and run the project typecheck command
# Discover and run the project test suite covering workspace route data loaders and domain integration points
# Discover and execute the repository import linting script to ensure no direct database connections exist in route components
```

**Accept when:**
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via CI typecheck, static analysis import boundary rules, and mandatory peer code review.
</enforcement>