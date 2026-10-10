# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Route Definitions Endpoint Schemas Representing Workspace

These rules are ALWAYS ACTIVE for all HTTP API route definitions, endpoint handlers, and request middleware handling workspace-scoped operations.

### Rules

- **R-CPW-001** MUST: Route definitions and endpoint schemas representing workspace resources MUST derive identifier parameters and response models from shared workspace schemas defined within @/control-plane/workspace.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute type checking
# Discover and execute the automated test suite to validate workspace service routing and synchronization behavior
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. All pull requests containing direct database access for workspace lifecycle state or bypassing the workspace service pattern must be blocked until refactored.
</enforcement>