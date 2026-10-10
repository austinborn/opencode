# Adoption of @opencode-ai/sdk/v2 for Client Domain State and Service Interfaces: Components Subscribing Realtime Session Notifications Register

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple application modules require access to session data, realtime status events, timeline projections, and permission controls.
- Direct or fragmented API consumption leads to divergent data models, inconsistent error handling, and duplicated event listener management.
- The repository contains widespread integration with @opencode-ai/sdk/v2 across state containers, UI components, and utility modules.

## Problem Statement

Without a standardized client SDK interface layer, independent UI components and state stores risk defining fragmented data models, divergent event subscription patterns, and duplicative communication logic when interacting with session and backend platform services.

## Decision

1. SHOULD: Components subscribing to realtime session notifications SHOULD register typed handlers through the standard event mechanism provided by @opencode-ai/sdk/v2.

## Policy Block

- SHOULD Components subscribing to realtime session notifications SHOULD register typed handlers through the standard event mechanism provided by @opencode-ai/sdk/v2.

In scope:
- Client application packages handling session models, composer flows, timeline projections, and event subscriptions.
- Modules integrating backend communication or runtime session notifications within the user interface.

Out of scope:
- Isolated visual primitives and generic interface components that operate without session context or domain models.
- Standalone utility functions that perform purely computational or formatting transformations without backend dependencies.

Exceptions:
- EXC-20-001: Third-party integration test harnesses during isolated unit testing where the SDK transport must be replaced by simulated fixtures

## Rationale

- Evidence from twenty-two application files demonstrates consistent reliance on @opencode-ai/sdk/v2 for timeline models, composer state, and event processing.
- Centralizing domain models and event streams within @opencode-ai/sdk/v2 ensures consistency between UI components and backend service capabilities.
- Standardizing on a unified SDK provides type safety across the frontend architecture and minimizes regression risks during protocol updates.

## Consequences

Positive:
- Establishes a single authoritative contract for session entities, timeline projections, and backend event channels.
- Eliminates redundant data fetching and socket subscription implementations across application modules.
- Improves type safety and maintainability across timeline, composer, and session dialog components.

Negative:
- Client features are coupled to the release cycles and API structure of the internal SDK package.
- Changes to shared model definitions within the SDK require coordinated updates across consuming workspace modules.
- Developers must maintain discipline to route interactions through the SDK rather than writing ad-hoc network queries.

## Alternatives

- Direct HTTP and WebSocket client integrations without an intermediate SDK (rejected)
  Rejected because: Causes fragmentation of domain model definitions, duplicates network and error handling logic, and increases the risk of contract drift across views.
  When valid: Decoupled micro-frontends with minimal domain state requirements.
- Modular micro-libraries per domain concept rather than a consolidated SDK package (rejected)
  Rejected because: Substantially increases dependency synchronization overhead across workspace modules and complicates version resolution.
  When valid: Polyglot monorepos requiring fine-grained tree-shaking across distinct non-overlapping consumer groups.

## Risks

- Tight coupling of client views to changes in the @opencode-ai/sdk/v2 API contract.
  Mitigation: Enforce semantic contract versioning and intermediate view-model projection layers for complex components.
  Owner: Frontend Architecture Team
- Bundle size bloat if the shared SDK incorporates unused domain capabilities across lightweight views.
  Mitigation: Leverage modular export subpaths and verify tree-shaking efficacy in workspace build audits.
  Owner: Client Platform Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Locate the workspace manifest to verify the configured dependency declaration for @opencode-ai/sdk/v2, then confirm that consuming application modules import types and clients from the designated package namespace.
- Structure session controllers and state stores around SDK event subscriptions, ensuring event listeners detach during component teardown cycles to prevent memory leaks.

## Continuation Context


Verify commands:
- Discover and run the project dependency verification suite to confirm that all imported interface modules resolve to the authorized lock artifact.
- Discover and execute the static analysis and type checking script declared in the repository build configuration to ensure interface compliance across all consuming packages.
- Discover and run the test harness configured in the workspace manifest to validate session lifecycle and event handling behavior against the client interfaces.

Accept when:
- Static analysis and workspace type verification pass without unresolved module specifiers or interface mismatches against @opencode-ai/sdk/v2.
- Dependency validation verifies that all application references to @opencode-ai/sdk/v2 adhere strictly to the repository lock resolution.
- All session model and event subscription test suites execute cleanly against the standardized interface implementations.

## Enforcement

- Verified by: Automated static type checking and linting rules evaluated during continuous integration pipelines.
- Verified by: Architecture boundary checks ensuring no direct unmediated network calls bypass the authorized SDK interface.
- Verified by: Peer code review verification on pull requests modifying session state or backend integration points.
- Violation handling: Pull requests introducing unmediated network calls or unauthorized interface duplicates will fail automated build gates.
- Violation handling: Violations must be refactored to consume @opencode-ai/sdk/v2 before approval and merging.
- Exception process: Submit an architectural exemption proposal detailing why @opencode-ai/sdk/v2 cannot satisfy the operational requirement.
- Exception process: Obtain formal sign-off from the architecture review committee prior to merging non-standard interface integrations.