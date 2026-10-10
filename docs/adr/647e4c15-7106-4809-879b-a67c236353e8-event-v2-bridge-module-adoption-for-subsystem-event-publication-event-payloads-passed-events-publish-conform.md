# Event-V2-Bridge Module Adoption for Subsystem Event Publication: Event Payloads Passed Events Publish Conform

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Subsystem services and boundary handlers require a unified mechanism to broadcast domain events, status updates, and lifecycle mutations without coupling directly to transport adapters or specific consumer implementations.
- Static analysis identifies widespread adoption of the event-v2-bridge internal module across domain session management, tool operations, language server integration, and transport route endpoints.
- Direct invocations of events.publish are used to dispatch typed domain events, replacing ad-hoc message passing mechanisms with a centralized event bridging layer.

## Problem Statement

Disparate subsystem components require a standardized, decoupled method to emit domain events and lifecycle transitions without binding domain logic directly to presentation listeners, network transports, or storage backends.

## Decision

1. SHOULD: All event payloads passed to events.publish SHOULD conform to strongly typed event schema definitions established within shared domain contracts.

## Policy Block

- SHOULD All event payloads passed to events.publish SHOULD conform to strongly typed event schema definitions established within shared domain contracts.

In scope:
- Components, services, and route handlers that broadcast domain state transitions, task outcomes, or lifecycle updates across subsystem boundaries.

Out of scope:
- Local, intra-component private state updates and strictly synchronous, intra-module function invocations that do not traverse subsystem boundaries.

Exceptions:
- EXC-20-001: Direct transport-level streaming is required where event bridging introduces unacceptable serialization overhead for large binary streams.

## Rationale

- Centralizing event publication through the event-v2-bridge module eliminates point-to-point coupling between domain workflows and downstream consumers.
- IR evidence demonstrates consistent utilization of events.publish across multiple discrete functional areas, proving an established pattern across the application.
- Enforcing a singular bridging seam enables uniform telemetry, event logging, and future transport protocol evolutions without refactoring domain logic.

## Consequences

Positive:
- Subsystem domain logic remains isolated from transport protocols, external buses, and client notification channels.
- Event emission patterns remain uniform across services, simplifying tracing, testing, and debugging.
- New event consumers can be attached to the bridge without modifying emitting services.

Negative:
- Introduces an indirection layer that requires maintenance of shared event schemas.
- Tracing asynchronous event delivery flows becomes more complex than direct method calls.

## Alternatives

- Direct point-to-point service messaging or direct observer registration (rejected)
  Rejected because: Tightly couples domain controllers to specific transport mechanisms and downstream listeners, inhibiting modular evolution.
  When valid: Only in strictly self-contained single-threaded utility modules with no external subscribers.
- Direct unmediated emission to global event emitters (rejected)
  Rejected because: Bypasses standard bridging contracts and hampers typed validation of cross-boundary events.
  When valid: In early prototyping phases prior to establishing formal subsystem boundaries.

## Risks

- Unchecked growth of unvalidated event schemas could degrade consumer reliability.
  Mitigation: Enforce strict schema validation and typing on all published events.
  Owner: Engineering Team
- Potential performance bottlenecks if the bridge dispatcher experiences high event contention.
  Mitigation: Implement asynchronous queueing and monitor dispatch latency metrics.
  Owner: Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Integrate the event-v2-bridge module in service implementations by passing typed domain event instances to events.publish.
- Define event payload structures alongside domain model definitions to ensure consistency across publishing services and consuming handlers.

## Continuation Context


Verify commands:
- Discover the repository test execution script from the build manifest and execute the test suite to verify event dispatch behavior.
- Locate the repository static analysis and type checking script to verify that all events.publish calls comply with expected event schema signatures.

Accept when:
- All event emission across domain services executes through the event-v2-bridge interface without type errors.
- Static verification and test suites pass with zero unresolved event publication errors.

## Enforcement

- Verified by: Continuous integration test execution and automated static analysis rules.
- Verified by: Peer code review verification of event dispatching boundaries.
- Violation handling: Code changes introducing direct external event broadcasting that bypasses the bridge will be rejected during review.
- Violation handling: Automated lint and build failures block pull request merging when unapproved dispatch patterns are detected.
- Exception process: Exceptions must be submitted via an architecture amendment request detailing performance constraints and obtaining approval from the lead architect.