# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Before Consuming Exports Internal Workspace Packages

These rules are ALWAYS ACTIVE for route handlers, server endpoints, and server-rendered components/form actions performing workspace state alterations or administration actions.

### Rules

- **R-WORKSPACE-001** MUST: Before consuming exports from internal workspace packages, consumers MUST inspect the repository dependency resolution artifact to verify the exact resolved contract and avoid version skew.
- **R-WORKSPACE-002** MUST: Ensure all workspace state modifications invoke domain methods exposed by @opencode-ai/console-core/workspace.js rather than composing raw database queries.
- **R-WORKSPACE-003** MUST: Validate incoming payloads at route entry points using schema validators prior to passing parameters to workspace domain functions.

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
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis checks and peer code reviews.
</enforcement>