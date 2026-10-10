# Centralize Referral Domain Operations via @opencode-ai/console-core/referral.js: Application Entry Points Interacting Referral Workflows

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application workflows require consistent handling of referral invitations, cookie extraction, authorization validation, and usage metric aggregation across multiple entry points.
- Direct manipulation of referral data within API handlers or UI query loaders risks fragmenting business logic, bypassing actor validation, and inducing data inconsistency.
- The codebase establishes a dedicated domain boundary via @opencode-ai/console-core/referral.js to encapsulate referral domain operations including creation, summary aggregation, and usage inspection.

## Problem Statement

Referral lifecycle actions—such as processing invitation cookies, validating workspace relationships, and calculating usage credits—are required in multiple application contexts, including interactive UI components, background invitation handlers, and administrative API endpoints. Without a single domain boundary, these operations risk differing implementations, fragmented validation logic, and leaky data persistence models.

## Decision

1. MUST: All application entry points interacting with referral workflows MUST consume domain operations directly from @opencode-ai/console-core/referral.js rather than re-implementing referral logic or querying underlying persistence layers directly.

## Policy Block

- MUST All application entry points interacting with referral workflows MUST consume domain operations directly from @opencode-ai/console-core/referral.js rather than re-implementing referral logic or querying underlying persistence layers directly.

In scope:
- All application routes, server queries, background tasks, and utility functions that create, inspect, or summarize referral entities.

Out of scope:
- Internal storage engines and driver-level abstractions encapsulated entirely within the core package boundary.

## Rationale

- Centralizing referral interactions within @opencode-ai/console-core/referral.js ensures that invariant checks, identity requirements, and calculation algorithms remain unified across the platform.
- Requiring consumers to access data via domain methods such as Referral.create, Referral.summary, and Referral.usagePreview shields presentation layers from changes to backend persistence schemas.
- Coordinating domain calls within actor boundaries guarantees consistent authorization and auditing for all referral operations regardless of the calling context.

## Consequences

Positive:
- Centralizes referral lifecycle logic, authorization boundaries, and credit aggregation in a single maintainable domain module.
- Ensures consistent validation and actor-scoped context across both background helper tasks and interactive user queries.
- Prevents schema leakage and direct database coupling across frontend components and API endpoints.

Negative:
- Changes to referral domain method signatures require synchronized updates across multiple consuming route handlers and server queries.
- Application handlers depend on the packaging and resolution structure of the shared core workspace module.

## Alternatives

- Direct database access within individual route handlers and UI server queries (rejected)
  Rejected because: Scattering SQL or datastore operations across interface boundaries leads to duplicated business rules, inconsistent referral state updates, and schema lock-in.
  When valid: Prototyping standalone utilities that operate outside the core domain model and have no shared state dependencies.
- Decentralized referral calculation logic embedded in client-side components (rejected)
  Rejected because: Exposing referral creation and credit calculation logic directly on the client creates security risks and violates actor authentication constraints.
  When valid: Purely visual client-only previews with no persistent impact or credit calculation implications.

## Risks

- Breaking changes in the shared domain module can simultaneously break multiple consumer route handlers and server queries.
  Mitigation: Establish automated contract integration tests that validate domain interfaces across consumer packages on every release.
  Owner: engineering team
- Context mismatch if an unauthenticated consumer attempts to execute domain methods that require actor credentials.
  Mitigation: Ensure domain methods require explicit actor context parameters or execution wrapping to guarantee authorization.
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
- When constructing new referral entry points, wrap domain queries within authenticated actor scoping to enforce identity boundaries before invoking referral methods.
- Ensure all payload structures passed to domain creation methods conform strictly to validated schema contracts before execution.

## Continuation Context


Verify commands:
- Discover and execute the project linting and architectural boundary validation suite to detect unauthorized direct database dependencies in application consumers.
- Discover and execute the workspace test suite covering referral domain operations, route handlers, and server queries.

Accept when:
- All referral creation, summary, and preview operations resolve through the centralized domain module without direct persistence bypasses.
- Static code analysis and architectural boundary checks confirm zero unapproved external or raw database dependencies in referral consumer modules.
- Automated test suites verify expected referral domain responses across all server query and route entry points.

## Enforcement

- Verified by: Automated lint and architectural boundary rules that flag direct database imports in API routes and presentation query components.
- Verified by: Peer code review validating that all referral operations route through the centralized domain module within an authenticated actor context.
- Verified by: Continuous integration pipelines verifying test suite passes across domain and consumer boundaries.
- Violation handling: Pull requests introducing unencapsulated referral queries or bypassing domain methods will be blocked from merging.
- Violation handling: Violations detected in existing modules must be refactored into the centralized referral domain module during the current iteration.
- Exception process: Submit an architecture exception request detailing why the referral domain module cannot satisfy the workflow requirements.
- Exception process: Obtain formal review and sign-off from domain architecture maintainers prior to merging alternate data access routines.
- Exception process: Document the temporary exception with an explicit remediation plan to bring the implementation back into compliance.