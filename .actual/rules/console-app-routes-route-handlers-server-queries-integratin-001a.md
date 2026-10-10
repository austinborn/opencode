# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Route Handlers Server Queries Integrating Opencode

These rules are ALWAYS ACTIVE for all route handlers, server endpoints, server-rendered components, and form actions performing workspace state alterations or administration actions.

### Rules

- **R-OPS-001** SHOULD: Route handlers and server queries integrating @opencode-ai/console-core/workspace.js SHOULD establish actor context boundaries via withActor prior to invoking workspace data access operations.

### Verify

```bash
# Discover and run the project static analysis and linting suites across all workspace route modules to confirm compliant imports.
# Discover and execute test validation suites covering workspace route handlers and domain operations to verify contract integrity.
```

**Accept when:**
- All route handlers modifying workspace state route operations through @opencode-ai/console-core/workspace.js.
- Direct database mutation queries against workspace tables are absent from application routing modules.
- Project static analysis and test suites execute without module resolution or type contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code reviews enforce these rules, and pull requests containing direct workspace database mutations or unapproved module imports are blocked from merging.
</enforcement>