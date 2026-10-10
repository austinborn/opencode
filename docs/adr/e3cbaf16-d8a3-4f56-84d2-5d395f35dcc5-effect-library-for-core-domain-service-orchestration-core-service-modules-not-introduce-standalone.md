# Effect Library for Core Domain Service Orchestration: Core Service Modules Not Introduce Standalone

Status: proposed
Date: 2025-05-15
Deciders: Detection Pipeline (automated)

## Context

- Core service operations across session lifecycle, event publishing, state restoration, and compaction require structured asynchronous orchestration.
- Unmanaged promise flows and raw async patterns risk unhandled rejections, inconsistent error tracking, and fragmented time management across complex domain workflows.
- The codebase establishes a unified pattern across core modules utilizing the Effect library for typed effects, generator-based control flows, and explicit failure channels.

## Problem Statement

Asynchronous operations across core domain modules require coordinated state transitions, precise timestamp generation, event publication, and strict failure management. Using unmanaged asynchronous primitives introduces risks of unhandled promise rejections, inconsistent temporal resolution, and lack of typed error propagation across service boundaries.

## Decision

1. SHOULD_NOT: Core service modules SHOULD NOT introduce standalone asynchronous promise chains when equivalent compositional pipelines can be expressed within the Effect runtime.

## Policy Block

- SHOULD_NOT Core service modules SHOULD NOT introduce standalone asynchronous promise chains when equivalent compositional pipelines can be expressed within the Effect runtime.

In scope:
- Core domain service workflows, session runners, lifecycle projectors, and control plane operations requiring asynchronous coordination or effect handling
- Event publication and state transition routines within core service boundaries

Out of scope:
- Low-level synchronous data utility functions that execute pure transformations without side effects
- Static database schema and table definitions that do not participate in asynchronous execution flows

Exceptions:
- EXC-20-001: Interfacing with external third-party boundaries that strictly require raw Promise interfaces

## Rationale

- The Effect library provides strongly typed, composable effect orchestration that eliminates hidden side effects and unhandled rejections across complex session lifecycles.
- Standardizing on generator-driven effect composition through yield star operators ensures consistent execution ergonomics across multi-step asynchronous processes such as session compaction, event publishing, and state restoration.
- Centralizing timestamp derivation via DateTime effect primitives allows deterministic temporal reasoning and isolated testing across state projection workflows.

## Consequences

Positive:
- Provides deterministic, strongly typed control flow for asynchronous operations across core services.
- Eliminates disparate error handling patterns by standardizing on explicit effect channels and defect propagation.
- Enables composable lifecycle coordination across session runners, state restoration, and event publication.

Negative:
- Requires team familiarity with functional effect programming paradigms and generator-driven syntax.
- Introduces boilerplate adapters when bridging between effect workflows and external unmanaged promise libraries.

## Alternatives

- Standard native async and await with unmanaged Promises (rejected)
  Rejected because: Lacks structural error typing, compositional resource management, and deterministic environment or time abstraction, leading to fragmented error handling across concurrent workflows.
  When valid: Simple self-contained scripts or standalone utilities with trivial error domains.
- Reactive programming streams such as RxJS (rejected)
  Rejected because: Adds heavy subscription lifecycle overhead and impedance mismatch with sequential domain transactions and event publication flows.
  When valid: Continuous real-time continuous signal processing with complex multi-stream transformations.

## Risks

- Steep learning curve for developers unfamiliar with functional effect systems and generator mechanics.
  Mitigation: Provide standardized domain service templates and pattern documentation for common effect flows.
  Owner: Core Platform Team
- Accidental mixing of unmanaged asynchronous execution with effect pipelines resulting in leaked errors.
  Mitigation: Enforce static analysis rules and code review checklists to ensure boundary conversions use designated adapter primitives.
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
- Ensure all effectful domain routines are encapsulated within generator functions to maintain consistent execution ergonomics and typed error propagation.
- When integrating external promise-based libraries, wrap external calls at the boundary into managed effect structures before passing them to internal service pipelines.

## Continuation Context


Verify commands:
- # Discover repository manifest and execute project type checking across core workspace packages
- # Discover repository test runner and execute core domain workflow test suites

Accept when:
- All core domain services compile without type errors using the resolved Effect library version.
- All effectful workflow tests pass with proper error channel and defect assertions.

## Enforcement

- Verified by: Automated continuous integration type checking and linting pipelines verifying Effect usage compliance.
- Verified by: Peer code review on pull requests touching core service workflows and asynchronous orchestration.
- Violation handling: Pull requests introducing unmanaged promise chains or bypassing effect error channels in core services will be blocked from merging.
- Exception process: Submit an architectural review request detailing external boundary constraints requiring unmanaged promises, including adapter designs.