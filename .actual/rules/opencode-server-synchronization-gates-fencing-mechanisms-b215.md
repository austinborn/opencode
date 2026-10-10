# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Synchronization Gates Fencing Mechanisms Invoke Waitforsync

These rules are ALWAYS ACTIVE for all HTTP API endpoints, route handlers, request middleware, and shared synchronization fences handling workspace-scoped operations.

### Rules

- **R-CPW-001** SHOULD: Synchronization gates and fencing mechanisms SHOULD invoke waitForSync and isSyncing methods provided by Workspace.Service before completing state-mutating requests.

### Verify

```bash
# Discover and execute type checking across server routes and middleware from the repository manifest
# Discover and execute the automated test suite to validate workspace service routing and synchronization behavior
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis, type verification, and peer code review.
</enforcement>