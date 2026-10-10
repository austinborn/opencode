# Effect Library Adoption for Runtime Concurrency and HTTP API Specifications: Http Endpoints Within Protocol Service Group

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Core runtime workflows require coordinated state mutations across integration lifecycles, connection attempts, and credential access boundaries.
- Asynchronous operations and state transitions necessitate deterministic concurrency controls to prevent race conditions during state finalization and event publication.
- Protocol boundary specifications demand strongly typed, declarative HTTP endpoint definitions that bind schema parameters to route handlers without untyped glue code.
- The codebase adopts the Effect library ecosystem to provide unified primitives for state synchronization and protocol endpoint contracts across workspace modules.

## Problem Statement

Managing asynchronous integration state mutations, background connection attempts, and external API endpoint declarations with disparate ad-hoc primitives leads to race conditions, untyped endpoint contracts, and fragmented error handling across service boundaries.

## Decision

1. MUST: HTTP API endpoints within protocol service group definitions MUST be declared using HttpApiEndpoint specifications with explicit schema parameters, queries, and success responses.

## Policy Block

- MUST HTTP API endpoints within protocol service group definitions MUST be declared using HttpApiEndpoint specifications with explicit schema parameters, queries, and success responses.

In scope:
- Asynchronous core runtime services managing in-memory integration and attempt state.
- Protocol module specifications defining HTTP endpoint schemas and route parameters.

Out of scope:
- Pure utility helper functions without stateful lifecycle or asynchronous concurrency requirements.
- Low-level database table schema definitions that interface directly with the database access layer.

Exceptions:
- EXC-20-001: Third-party client integrations require imperative callback APIs that cannot natively accept Effect execution pipelines.

## Rationale

- Evidence demonstrates consistent application of Effect across core runtime state mutation, synchronized attempt management, and HTTP endpoint declarations across multiple workspace packages.
- SynchronizedRef ensures atomic, race-free state transitions during concurrent connection attempt updates and event emissions without requiring manual mutex locking.
- HttpApiEndpoint provides declarative type safety from protocol specification through route registration, enforcing strict contract adherence between services.

## Consequences

Positive:
- Unified concurrency model eliminating race conditions across in-memory integration state updates.
- End-to-end type safety spanning protocol endpoint definitions, parameter validation, and service responses.
- Deterministic resource management and structured error propagation across asynchronous operational pipelines.

Negative:
- Steeper learning curve for contributors unfamiliar with functional effect systems and combinators.
- Additional architectural discipline required to prevent leaking imperative mutable structures into Effect pipelines.

## Alternatives

- Native JavaScript Promises with manual locking and imperative route handlers (rejected)
  Rejected because: Native promises lack built-in cancellation, atomic synchronization primitives like SynchronizedRef, and declarative typed endpoint schema bindings.
  When valid: Small standalone utility scripts without concurrent state transitions or formal protocol schemas.
- Standard web framework route decorators without a unified functional effect runtime (rejected)
  Rejected because: Separates protocol contract definitions from core runtime execution semantics, preventing consistent error composition.
  When valid: Monolithic web applications without shared cross-package protocol schemas.

## Risks

- Accidental introduction of unmanaged promise chains or imperative side effects inside Effect pipelines.
  Mitigation: Enforce static analysis linting rules and peer architectural review for all effect-managed modules.
  Owner: Core Platform Engineering Team
- API drift between protocol endpoint definitions and core service implementation handlers.
  Mitigation: Validate protocol schemas against service handlers through automated type-checking suites during continuous integration.
  Owner: Protocol and API Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Model shared in-memory state requiring concurrent access using SynchronizedRef instances and mutate state via functional transformation callbacks.
- Define protocol boundaries using HttpApiEndpoint declarations that explicitly pair route path patterns with schema validators for path parameters, query parameters, and response bodies.

## Continuation Context


Verify commands:
- Discover the project verification script from the repository manifest and execute the type-checking suite across all workspace packages.
- Discover and run the project automated test suite to confirm state synchronization and protocol endpoint behaviors pass without error.

Accept when:
- All type-checking validations across core and protocol packages succeed with zero type errors.
- All automated integration and protocol test suites execute successfully with all assertions passing.

## Enforcement

- Verified by: Automated continuous integration checks executing compiler type validation and test suites on every pull request.
- Verified by: Mandatory architectural peer review verifying adherence to Effect primitives and protocol endpoint conventions.
- Violation handling: Pull requests introducing uncoordinated mutable state or non-standard endpoint definitions are blocked from merging until refactored into compliant Effect structures.
- Exception process: Submit an architectural exception request documenting why native primitives or alternative frameworks are required, pending approval by the platform architecture team.