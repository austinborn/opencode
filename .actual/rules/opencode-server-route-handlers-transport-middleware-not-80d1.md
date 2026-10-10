# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Route Handlers Transport Middleware Not Bypass

These rules are ALWAYS ACTIVE for all HTTP API route definitions, endpoint handlers, request middleware handling workspace-scoped operations, and shared synchronization fences and barrier utilities coordinating workspace state.

### Rules

- **R-CPW-001** MUST_NOT: Route handlers and transport middleware MUST NOT bypass Workspace.Service to query workspace tables or internal state stores directly.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute type checking across all server routes and middleware.
# Discover and execute the automated test suite to validate workspace service routing and synchronization behavior.
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests containing direct database access for workspace lifecycle state or bypassing the workspace service pattern must be blocked until refactored to use the standardized service module.
</enforcement>