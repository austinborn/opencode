# Adopt @opencode-ai/console-core as Domain Module for Console Route Data Operations: Route Component Modules Import Domain Capabilities

These rules are ALWAYS ACTIVE for all application routes, server-side data loaders, query functions, server actions, mutation handlers, and workspace resource configuration workflows.

### Rules

- **R-CON-001** MUST: Route and component modules MUST import domain capabilities through specific subpath specifiers of @opencode-ai/console-core corresponding to each domain boundary.

### Verify

```bash
# Discover the workspace dependency resolution artifact and run the project typecheck command to verify module export contracts
# Discover and run the project test suite covering workspace route data loaders and domain integration points
# Discover and execute the repository import linting script to ensure no direct database connections exist in route components
```

**Accept when:**
- All route data queries and mutations resolve domain operations through @opencode-ai/console-core without unresolved module errors.
- Automated typecheck and test validation scripts pass across all workspace routes without domain contract violations.
- No route or presentation module establishes direct database connections outside the core module boundary.

<enforcement>
Claude Code MUST NOT skip or defer verification. Continuous integration blocks pull requests introducing direct database calls in route components or breaking core module exports.
</enforcement>