# Adoption of @/context/sdk Module for Unified Client and Realtime Event Management: Before Implementing Changes Involving Versioned Dependencies

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application pages, controllers, and dialog components require coordinated access to client session mutation methods, directory metadata, and realtime backend status events.
- Direct instantiation of backend client instances across disparate presentation layers risks divergent configuration, duplicate socket connections, and fragmented lifecycle management.
- The codebase establishes a unified context module providing an accessor hook that centralizes client operations, event subscriptions, and active workspace context.

## Problem Statement

Without a centralized abstraction layer for backend service interactions, user interface components and session controllers independently manage communication lifecycles, leading to redundant network connections, fragmented event handling, and inconsistent session state across views.

## Decision

1. MUST: Before implementing changes involving versioned dependencies supporting this module, the consumer MUST locate the repository dependency manifest and lock artifact to resolve the authoritative installed version.

## Policy Block

- MUST Before implementing changes involving versioned dependencies supporting this module, the consumer MUST locate the repository dependency manifest and lock artifact to resolve the authoritative installed version.

In scope:
- Frontend application modules including views, pages, dialogs, and workspace controllers requiring backend client calls or realtime event streaming.

Out of scope:
- Headless backend services, build configuration scripts, and pure isolated presentation components with no backend interaction.

## Rationale

- Centralizing client and event operations behind a single context module guarantees uniform session lifecycle management and prevents redundant network sockets across components.
- Exposing typed event bus methods and client mutation endpoints through a common context accessor simplifies component testing and ensures directory context consistency.
- Observed usage across session dialogs, controllers, and workspace views demonstrates consistent architectural reliance on the shared context pattern for state synchronization.

## Consequences

Positive:
- Guarantees a single source of truth for active directory context and client connection state across the application interface.
- Eliminates duplicate event listeners and orphaned network connections through centralized event bus subscriptions.
- Decouples presentation components from concrete transport and client instantiation details.

Negative:
- Components requiring backend interactions become tightly coupled to the availability and lifecycle of the root context provider.
- Improperly scoped event listeners within components can cause memory leaks if teardown lifecycles are neglected.

## Alternatives

- Direct client instantiation per component or controller (rejected)
  Rejected because: Instantiating individual client connections across separate views creates duplicate network overhead, desynchronized directory metadata, and uncoordinated event handling.
  When valid: Valid only in standalone command-line scripts or isolated background workers operating outside the user interface hierarchy.
- Global un-scoped singleton instance (rejected)
  Rejected because: Global singletons hinder contextual directory switching, complicate mock injection during testing, and fail to integrate cleanly with component reactive lifecycles.
  When valid: Valid in stateless utility libraries that do not depend on session or workspace context.

## Risks

- Consuming components rendered outside the context provider hierarchy will encounter runtime errors when accessing client methods.
  Mitigation: Enforce top-level context provider mounting in root layout definitions and incorporate defensive runtime boundary validation.
  Owner: engineering team
- Unbounded realtime event listener registration in reactive components could degrade performance or produce duplicate UI triggers.
  Mitigation: Ensure event handlers filter incoming events by identifier and unbind during component cleanup lifecycles.
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
- Verify that all client mutation methods and realtime event handlers consume the active directory path provided by the context accessor to preserve workspace isolation.
- Structure event subscription callbacks to perform early returns on mismatched identifiers or inactive view states before dispatching modal dialogs or mutating state.

## Continuation Context


Verify commands:
- Discover and run the project repository's static analysis and type checking script to verify compliant imports and typed context accessor invocations.
- Discover and execute the project test runner across component and controller test suites to confirm that context-dependent behaviors pass with mock providers.

Accept when:
- Type checking and static analysis pass across all application modules without direct out-of-band client instantiations.
- Automated unit and integration tests for session controllers and dialogs execute cleanly using the context provider interface.

## Enforcement

- Verified by: Automated pull request checks running repository type checking and linting suites.
- Verified by: Peer code review verifying that backend interactions utilize the authorized context accessor.
- Violation handling: Pull requests introducing direct client instantiations or unmanaged event listeners outside the context module will be blocked at code review.
- Violation handling: Static analysis violations must be remediated prior to merging into main branches.
- Exception process: Exceptions require documented justification and sign-off from architecture leads, detailing why the context abstraction cannot accommodate the specialized transport requirement.