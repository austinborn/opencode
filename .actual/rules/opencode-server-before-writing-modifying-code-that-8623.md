# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Before Writing Modifying Code That Uses

These rules are ALWAYS ACTIVE for HTTP API route definitions, endpoint handlers, request middleware handling workspace-scoped operations, and shared synchronization fences and barrier utilities coordinating workspace state.

### Rules

- **R-WORKSPACE-001** MUST: Before writing or modifying code that uses any versioned workspace or runtime dependency, the consumer MUST inspect the project lock or resolution artifact to determine the exact resolved dependency version and verify API compatibility against official documentation.
- **R-WORKSPACE-002** MUST: Inject the service dependency using the established service accessor pattern rather than instantiating state directly when constructing new HTTP endpoints or routing middleware that require workspace context.
- **R-WORKSPACE-003** MUST: Ensure synchronization checks utilize the workspace service methods to check active synchronization state prior to executing dependent operations.

### Verify

```bash
# Discover and execute project type checking and test suite from repository manifest
# Example discovery pattern:
# 1. Read package.json / manifest for typecheck and test scripts
# 2. Run type checking across server routes and middleware
# 3. Run automated test suite to validate workspace service routing and synchronization behavior
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verified by automated static analysis, type verification in continuous integration pipelines, and peer code review.
</enforcement>