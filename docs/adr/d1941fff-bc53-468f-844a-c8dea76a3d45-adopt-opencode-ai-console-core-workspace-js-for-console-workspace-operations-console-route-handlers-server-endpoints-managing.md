# Adopt @opencode-ai/console-core/workspace.js for Console Workspace Operations: Console Route Handlers Server Endpoints Managing

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Administrative support actions and user-facing settings views require coordinated modifications to workspace state and properties.
- Decentralized route handlers risk duplicating validation logic and executing conflicting updates directly against persistent datastores.
- The application consistently imports @opencode-ai/console-core/workspace.js across route handlers to coordinate workspace lifecycle operations.

## Problem Statement

Decentralized mutation of workspace domain state across independent administrative route handlers and settings views risks inconsistent validation, fragmented auditability, and divergent database state. Without a shared domain module encapsulating workspace logic, route handlers become tightly coupled to raw database schema details and duplicate business invariants.

## Decision

1. MUST: All console route handlers and server endpoints managing workspace state MUST coordinate workspace domain operations through the @opencode-ai/console-core/workspace.js core module.

## Policy Block

- MUST All console route handlers and server endpoints managing workspace state MUST coordinate workspace domain operations through the @opencode-ai/console-core/workspace.js core module.

In scope:
- Route handlers and server endpoints performing workspace state alterations or administration actions.
- Server-rendered components and form actions updating workspace configuration.

Out of scope:
- Read-only workspace telemetry queries that do not alter domain state.
- External third-party integration webhooks operating outside workspace lifecycle boundaries.

## Rationale

- Centralizing workspace state transitions within @opencode-ai/console-core/workspace.js guarantees that business invariants remain uniform across both administrative support operations and user-initiated settings changes.
- Encapsulating persistence logic behind domain functions decouples presentation and routing layers from direct database query schemas.
- Reusing a single core module standardizes error handling and audit hooks across all workspace lifecycle events.

## Consequences

Positive:
- Standardizes workspace state transition rules and validation across both administrative and self-service entry points.
- Isolates persistence schema modifications to the core workspace module, shielding routing handlers from schema churn.
- Simplifies regression testing by establishing a coherent domain API boundary for workspace mutations.

Negative:
- Couples application route handlers to the release lifecycle and export contracts of the core workspace module.
- Requires developers to discover and understand internal domain contracts rather than writing direct queries.

## Alternatives

- Direct database mutation queries implemented individually within each route handler (rejected)
  Rejected because: Duplicates state transition logic and fragments validation rules across administrative and settings routes.
  When valid: Single-purpose utility scripts or throwaway prototypes operating outside production boundaries.
- Dedicated external microservice boundary for workspace state administration (rejected)
  Rejected because: Introduces unnecessary operational overhead, deployment complexity, and network latency for collocated domain operations.
  When valid: Multi-organization platforms requiring isolated physical runtime boundaries and independent scaling profiles.

## Risks

- Breaking changes in @opencode-ai/console-core/workspace.js export contracts could fail dependent route handlers at build or runtime.
  Mitigation: Enforce strict contract testing and verify resolved dependencies against repository lock files before deployment.
  Owner: engineering team
- Route handlers bypassing input validation prior to calling domain functions.
  Mitigation: Enforce structural schema validation at the HTTP boundary before delegating to the domain module.
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
- Ensure all workspace state modifications invoke domain methods exposed by @opencode-ai/console-core/workspace.js rather than composing raw database queries.
- Validate incoming payloads at route entry points using schema validators prior to passing parameters to workspace domain functions.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting suites across all workspace route modules to confirm compliant imports.
- Discover and execute test validation suites covering workspace route handlers and domain operations to verify contract integrity.

Accept when:
- All route handlers modifying workspace state route operations through @opencode-ai/console-core/workspace.js.
- Direct database mutation queries against workspace tables are absent from application routing modules.
- Project static analysis and test suites execute without module resolution or type contract violations.

## Enforcement

- Verified by: Automated static analysis checks in continuous integration pipelines detecting prohibited direct datastore mutations.
- Verified by: Peer code reviews verifying that new workspace mutation routes consume the centralized domain module.
- Violation handling: Pull requests containing direct workspace database mutations or unapproved module imports are blocked from merging.
- Exception process: Exceptions require documented architectural review and sign-off detailing why domain encapsulation cannot be utilized.