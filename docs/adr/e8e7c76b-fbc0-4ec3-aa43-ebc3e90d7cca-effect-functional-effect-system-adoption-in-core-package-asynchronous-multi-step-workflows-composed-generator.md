# Effect Functional Effect System Adoption in Core Package: Asynchronous Multi Step Workflows Composed Generator

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Core operational services require coordinated asynchronous execution, background task forking, external HTTP interactions, and structured failure handling across stateful subsystems.
- Direct reliance on unmanaged native asynchronous promises risks unhandled rejections, untracked background execution leaks, and inconsistent error capture across service boundaries.
- Multiple core modules require unified state finalization, cached remote repository synchronization, and event publication workflows governed by deterministic lifecycles.

## Problem Statement

Core domain services require resilient asynchronous control, deterministic resource allocation, background fiber supervision, and typed failure management. Ad-hoc asynchronous promise chains lead to untracked concurrent processes, memory leaks, and fragmented error reporting across core modules.

## Decision

1. MUST: Asynchronous multi-step workflows MUST be composed using generator-based effect functions or functional piping combinators rather than unmanaged promise chains.

## Policy Block

- MUST Asynchronous multi-step workflows MUST be composed using generator-based effect functions or functional piping combinators rather than unmanaged promise chains.

In scope:
- All core domain services and stateful infrastructure modules managing asynchronous workflows, concurrency, or background operations.
- Internal operational flows performing resource caching, background refresh, and asynchronous state synchronization.

Out of scope:
- Peripheral scripts and standalone utilities operating independently of core runtime state.
- External third-party client contracts that enforce native synchronous or promise-only return signatures without internal core integration.

## Rationale

- The Effect library provides a cohesive functional foundation for structured concurrency, fiber supervision, and typed error channels observed across core modules.
- Standardizing on generator-based effect composition and piping combinators ensures uniform error handling and consistent resource cleanup across long-lived services.
- Managing concurrent cache materialization and external requests via explicit fiber scoping avoids race conditions and orphaned background processes.

## Consequences

Positive:
- Provides predictable, structured concurrency and scope-bound fiber management across core services.
- Unifies failure management through explicit cause inspection, eliminating unhandled background rejections.
- Standardizes asynchronous state and cache mutation sequencing across core domain boundaries.

Negative:
- Steeper onboarding curve requiring developers to understand functional effect paradigms, generators, and fiber runtime mechanics.
- Increased friction when integrating with external third-party libraries that rely strictly on native Promise interfaces.
- Potential bundle overhead and complex type signatures across public module boundaries.

## Alternatives

- Native Promise and async-await constructs for asynchronous workflow orchestration (rejected)
  Rejected because: Lacks built-in fiber scoping, explicit typed cause interception, and unified cancellation mechanics across concurrent background operations.
  When valid: Lightweight utility scripts or decoupled consumer packages with minimal concurrency and state management needs.
- Ad-hoc event emitters and procedural background timers for lifecycle management (rejected)
  Rejected because: Introduces uncoordinated lifecycle boundaries, leaks asynchronous fibers outside lexical scopes, and obscures error dissemination.
  When valid: Isolated peripheral integrations where external library interfaces strictly mandate EventEmitter event subscriptions.

## Risks

- Cognitive overhead and onboarding friction for developers unfamiliar with functional effect systems.
  Mitigation: Provide centralized architectural templates and team training on functional effect combinators and generator patterns.
  Owner: Engineering Team
- Ecosystem friction when integrating third-party dependencies requiring vanilla promises.
  Mitigation: Wrap external synchronous or promise-based APIs in standard effect adapters at module boundaries.
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
- Structure multi-step operations using generator-based effect flows to maintain legible sequential execution.
- Enclose background operations in explicit runtime scopes using fiber forking combinators to prevent orphan background execution.
- Isolate external network requests behind dedicated client wrappers and intercept execution causes before exposing data to callers.

## Continuation Context


Verify commands:
- Discover the repository build and test orchestration scripts from the project manifest and execute the test suite across core package modules.
- Discover the workspace type-checking command from the project configuration and verify that all effect-based type signatures compile without diagnostic errors.

Accept when:
- All core domain service modules import and execute asynchronous, scoped, and concurrent workflows via the Effect runtime without unhandled rejections.
- The project static type validation and automated test suites across core package modules pass without errors.

## Enforcement

- Verified by: Automated static type-checking and lint checks executed during continuous integration workflows.
- Verified by: Peer architectural code reviews examining service layer concurrency and error-handling patterns.
- Violation handling: Pull requests introducing unmanaged asynchronous primitives or bypassed effect lifecycles within core modules will be blocked during automated verification.
- Violation handling: Violations flagged during architectural review must be refactored to use standard effect generators and error interceptors prior to merge.
- Exception process: Exceptions require formal architectural review by core maintainers, detailing why functional effect constructs cannot satisfy the integration boundary.
- Exception process: Approved exceptions must document boundary translation layers converting native promises into typed effect contracts at the edge.