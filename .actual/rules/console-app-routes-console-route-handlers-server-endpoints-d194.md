# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Console Route Handlers Server Endpoints Managing

These rules are ALWAYS ACTIVE for all console route handlers and server endpoints managing workspace state.

### Rules

- **R-WS-001** MUST: All console route handlers and server endpoints managing workspace state MUST coordinate workspace domain operations through the @opencode-ai/console-core/workspace.js core module.

### Verify

```bash
# Discover and run the project static analysis and linting suites across all workspace route modules
# Discover and execute test validation suites covering workspace route handlers and domain operations
```

**Accept when:**
- All route handlers modifying workspace state route operations through @opencode-ai/console-core/workspace.js.
- Direct database mutation queries against workspace tables are absent from application routing modules.
- Project static analysis and test suites execute without module resolution or type contract violations.

<enforcement>
Claude Code MUST NOT skip or defer verification. Automated static analysis and peer code review enforce that direct workspace database mutations or unapproved module imports are blocked.
</enforcement>