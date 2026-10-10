# State Module: In-Memory Entity Registry Management via State.create Draft Pattern: Before Implementing Updating Dependencies Associated State

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Core domain services require runtime in-memory caching and management of entity collections such as commands, integrations, and agents.
- Unconstrained direct mutations on shared in-memory collections lead to race conditions, reference leakage, and missed event notifications across service boundaries.
- The core package defines an internal state module providing a State.create factory that manages mutable drafts and coordinates state finalization.

## Problem Statement

Managing mutable in-memory registries directly exposes shared state collections to inconsistent updates, concurrency anomalies, and fragmented event publishing, necessitating a standardized pattern for entity encapsulation and lifecycle finalization.

## Decision

1. MUST: Before implementing or updating dependencies associated with state management or effect execution, the consumer MUST inspect the project lock artifact to resolve and verify the exact dependency version.

## Policy Block

- MUST Before implementing or updating dependencies associated with state management or effect execution, the consumer MUST inspect the project lock artifact to resolve and verify the exact dependency version.

In scope:
- In-memory registry and state storage definitions within core domain services
- Entity collection lifecycle management requiring atomic updates and finalization dispatch

Out of scope:
- Stateless utility functions and pure transformation helpers
- External persistent database layers managed outside in-memory core service registries

## Rationale

- Adopting State.create standardizes entity lifecycle operations across disparate core domains, eliminating divergent custom cache implementations.
- Encapsulating updates within draft proxy handlers guarantees that mutating property assignments do not contaminate stable read references until committed.
- Integrated finalize hooks enable seamless decoupling of state modification from downstream event publication via effect execution.

## Consequences

Positive:
- Provides a consistent API surface across core services for entity listing, retrieval, mutation, and removal.
- Protects against state corruption by confining property modifications to managed draft proxies.
- Centralizes orchestration of domain update notifications upon successful finalization.

Negative:
- Introduces layer indirection and minor memory overhead associated with draft proxy instantiation.
- Requires developers to adhere to draft mutation conventions rather than standard collection primitives.

## Alternatives

- Direct shared collection mutations on raw map instances (rejected)
  Rejected because: Fails to isolate concurrent reads during modification and lacks automated lifecycle finalization hooks, leading to inconsistent event dispatches.
  When valid: Simple single-threaded scripts without concurrent readers or downstream event propagation requirements.
- External immutability library adoption across all domain collections (rejected)
  Rejected because: Imposes significant external dependency footprints and runtime cloning overhead when the lightweight internal draft module satisfies architectural requirements.
  When valid: Architectures requiring persistent data structures with structural sharing across distributed storage nodes.

## Risks

- Bypassing the draft interface by mutating returned entity references outside draft update closures
  Mitigation: Return cloned or read-only projections in retrieval methods and enforce immutable typing boundaries in domain interfaces
  Owner: Core Engineering Team
- Failures in finalize hook execution interrupting entity event publishing
  Mitigation: Ensure finalization effects are safely piped and covered by automated lifecycle test suites
  Owner: Core Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- When constructing initial state instances, initialize typed map collections to hold domain entries, ensuring draft definitions supply type-safe accessor and mutator delegates.
- For services publishing domain events, chain notification effects within the finalize callback to ensure downstream systems react only after the draft transaction commits.

## Continuation Context


Verify commands:
- Discover the project test runner and execute the core package unit test suite covering domain state registries.
- Discover the project static type checker and verify zero compilation errors across domain state modules.

Accept when:
- All core domain entity registries define initial, draft, and optional finalize handlers via State.create.
- Type verification and automated test suites for domain entity operations pass without errors.

## Enforcement

- Verified by: Static type analysis during pull request verification
- Verified by: Automated unit and integration test runs in continuous integration pipelines
- Verified by: Architectural peer review of all new domain service state definitions
- Violation handling: Pull request rejection until direct collection mutations are replaced with State.create draft abstractions
- Violation handling: Static analysis failure blocking merges if non-conforming state patterns are detected
- Exception process: Submit an architectural variance request documented with benchmark evidence demonstrating draft abstraction incompatibility
- Exception process: Approval required from the principal architecture lead