# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Interactions Workspace Operations Performed Via Service

These rules are ALWAYS ACTIVE for all files matching the configured scope.

### Rules

- **R-WRK-001** MUST: Interactions with workspace operations MUST be performed via the Workspace.Service.use invocation pattern to access the workspace service instance.

### Verify

```bash
# Discover and execute project type checking and automated test suite from the repository manifest
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification.
</enforcement>