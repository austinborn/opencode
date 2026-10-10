# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Application Route Handlers Not Execute Hoc

These rules are ALWAYS ACTIVE for all application route handlers and server endpoints performing workspace state alterations or administration actions, as well as server-rendered components and form actions updating workspace configuration.

### Rules

- **R-WRK-001** MUST_NOT: Application route handlers MUST_NOT execute ad-hoc workspace state mutations directly against persistence stores, bypassing @opencode-ai/console-core/workspace.js.

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
Claude Code MUST NOT skip or defer verification. Verification is mandatory.
</enforcement>