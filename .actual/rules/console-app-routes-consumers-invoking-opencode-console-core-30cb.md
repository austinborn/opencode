# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Consumers Invoking Opencode Console Core Workspace

These rules are ALWAYS ACTIVE for all route handlers, server endpoints, and components performing workspace state alterations or administration actions.

### Rules

- **R-WRK-001** MUST: Consumers invoking @opencode-ai/console-core/workspace.js mutation APIs MUST validate input parameters before executing domain updates.

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