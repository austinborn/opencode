# Adoption of @/control-plane/workspace Service Interface for Instance HTTP API Routing and Lifecycle Management: Http Route Handlers Routing Middleware Synchronization

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- HTTP API endpoints, route handlers, and middleware require access to workspace metadata, lifecycle status, and synchronization barriers.
- Direct manipulation of workspace persistence or session stores across disparate HTTP route handlers creates fragmented synchronization semantics and tight coupling to storage models.
- The codebase introduces the @/control-plane/workspace module to provide a unified Workspace.Service execution context and shared workspace domain schemas.
- Route middleware and synchronization fences consume Workspace.Service.use to verify workspace availability, await synchronization events, and resolve workspace identifiers.

## Problem Statement

Without a centralized module interface for workspace domain interactions, individual HTTP route handlers and routing middleware risk implementing disparate synchronization checks, state lookups, and lifecycle validations. This lack of uniformity can lead to race conditions during workspace synchronization, inconsistent error responses across endpoints, and tight coupling between transport routing layers and internal workspace storage logic.

## Decision

1. MUST: All HTTP API route handlers, routing middleware, and synchronization boundaries requiring workspace state or lifecycle controls MUST consume the @/control-plane/workspace module.

## Policy Block

- MUST All HTTP API route handlers, routing middleware, and synchronization boundaries requiring workspace state or lifecycle controls MUST consume the @/control-plane/workspace module.

In scope:
- HTTP API route definitions, endpoint handlers, and request middleware handling workspace-scoped operations.
- Shared synchronization fences and barrier utilities coordinating workspace state.

Out of scope:
- Stateless utility functions and transport-agnostic helper libraries that do not manipulate workspace lifecycle or metadata.
- Independent subsystems operating outside the server instance control plane.

## Rationale

- Evidence across multiple server route handlers, route groups, and synchronization fences confirms uniform adoption of @/control-plane/workspace through Workspace.Service.use.
- Standardizing workspace operations through a dedicated module boundary prevents divergence in synchronization handling and ensures consistent route parameter validation.
- Encapsulating workspace lifecycle checks within Workspace.Service facilitates centralized state transitions and isolation from underlying persistence mechanisms.

## Consequences

Positive:
- Centralizes workspace lifecycle operations, synchronization barriers, and status checks in a single module interface.
- Ensures consistent schema definitions for workspace identifiers and payload validation across route endpoints.
- Minimizes coupling between HTTP transport handlers and underlying database tables.

Negative:
- Introduces service resolution indirection via callback patterns for all workspace-dependent route operations.
- Requires all endpoint handlers and middleware touching workspace state to maintain alignment with the internal control plane module interface.

## Alternatives

- Direct persistence access and inline synchronization logic in each HTTP route handler (rejected)
  Rejected because: Leads to fragmented synchronization checks, duplicate database queries, and increased risk of race conditions across route endpoints.
  When valid: Valid only in minimal prototypes or isolated single-file demonstration scripts where modular boundaries are unnecessary.
- Global singleton workspace manager accessed via module-level global variables (rejected)
  Rejected because: Prevents scoped lifecycle isolation, impairs multi-instance testability, and obscures dependency boundaries.
  When valid: Valid in legacy monolithic single-threaded environments with no concurrent instance isolation requirements.

## Risks

- Service resolution failure or blocking synchronization barriers causing request timeouts in HTTP middleware
  Mitigation: Enforce explicit timeout policies and error channel propagation when awaiting workspace synchronization via the service
  Owner: engineering team
- Inconsistent schema updates between the control-plane module and consumers causing runtime deserialization errors
  Mitigation: Verify contract schemas against route parameters and response shapes using automated type checking in the continuous integration pipeline
  Owner: engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- When constructing new HTTP endpoints or routing middleware that require workspace context, inject the service dependency using the established service accessor pattern rather than instantiating state directly.
- Ensure synchronization checks utilize the workspace service methods to check active synchronization state prior to executing dependent operations.

## Continuation Context


Verify commands:
- Discover the project verification script from the repository manifest and execute type checking across all server routes and middleware.
- Discover and execute the automated test suite to validate workspace service routing and synchronization behavior.

Accept when:
- All routes and middleware interacting with workspace state compile cleanly against the control-plane workspace service interface without type errors.
- Automated tests confirm that workspace synchronization barriers and routing operations execute without unhandled service errors.

## Enforcement

- Verified by: Automated static analysis and type verification in continuous integration pipelines.
- Verified by: Peer code review for pull requests modifying server routing, middleware, or workspace interaction logic.
- Violation handling: Pull requests containing direct database access for workspace lifecycle state or bypassing the workspace service pattern must be blocked until refactored to use the standardized service module.
- Exception process: Architectural exceptions must be reviewed and approved by principal engineering leads and documented with explicit justification.