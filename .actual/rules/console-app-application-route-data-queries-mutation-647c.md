# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Application Route Data Queries Mutation Actions

These rules are ALWAYS ACTIVE for all application route files, server-side data loaders, query functions, workspace management, billing, member administration, and resource configuration workflows.

### Rules

- **R-CC-001** MUST: Application route data queries and mutation actions MUST execute domain operations and data access via @opencode-ai/console-core subpath modules rather than accessing raw database drivers or executing ad-hoc queries directly in UI components.

### Verify

```bash
# Discover the workspace dependency resolution artifact and run typecheck/test/lint commands
# Example discovery sequence:
# 1. Find manifest (e.g., package.json, pnpm-lock.yaml, etc.)
# 2. Run the project typecheck command to verify module export contracts
# 3. Discover and run the project test suite covering workspace route data loaders and domain integration points
# 4. Discover and execute the repository import linting script to ensure no direct database connections exist in route components
```

**Accept when:**
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

<enforcement>
Claude Code MUST NOT skip or defer verification. All changes affecting domain interfaces must be verified via continuous integration typechecks, import boundary rules, and mandatory peer code review.
</enforcement>