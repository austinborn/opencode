# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Http Route Handlers Routing Middleware Synchronization

These rules are ALWAYS ACTIVE for all HTTP API route definitions, endpoint handlers, request middleware, and shared synchronization fences handling workspace-scoped operations.

### Rules

- **R-CP-001** MUST: All HTTP API route handlers, routing middleware, and synchronization boundaries requiring workspace state or lifecycle controls MUST consume the @/control-plane/workspace module.

### Verify

```bash
# Discover the project verification script from the repository manifest and execute type checking across all server routes and middleware.
# Discover and execute the automated test suite to validate workspace service routing and synchronization behavior.
```

**Accept when:**
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

<enforcement>
Claude Code MUST NOT skip or defer verification. Verification is mandatory via automated static analysis and type verification in continuous integration pipelines, as well as peer code review.
</enforcement>