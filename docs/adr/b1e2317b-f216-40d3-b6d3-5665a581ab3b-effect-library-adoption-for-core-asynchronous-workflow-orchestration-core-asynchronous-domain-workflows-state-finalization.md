# Effect Library Adoption for Core Asynchronous Workflow Orchestration: Core Asynchronous Domain Workflows State Finalization

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Core business logic across permission coordination, reference materialization, question handling, and session compaction requires reliable asynchronous control flow and state management.
- Uncoordinated asynchronous logic and raw promise handling risk unhandled promise rejections, untracked background execution, and inconsistent state finalization.
- The codebase establishes a unified asynchronous runtime paradigm across core modules through the adoption of the effect library.

## Problem Statement

Managing complex asynchronous lifecycles across core domain services—including concurrent materialization, deferred resolution, and event broadcasting—using disparate asynchronous patterns leads to fragmented error handling, unmonitored background tasks, and unpredictable failure modes.

## Decision

1. MUST: Core asynchronous domain workflows and state finalization routines MUST be constructed as generator-based effect programs utilizing the Effect.gen constructor from the adopted effect library.

## Policy Block

- MUST Core asynchronous domain workflows and state finalization routines MUST be constructed as generator-based effect programs utilizing the Effect.gen constructor from the adopted effect library.

In scope:
- Asynchronous workflows, background execution, and state finalization routines within core domain services.
- Modules responsible for reference materialization, session lifecycle, and asynchronous interaction requests.

Out of scope:
- Synchronous in-memory utility functions that do not execute asynchronous operations or mutate shared state.
- Declarative data schemas and static type definitions that do not perform runtime I/O.

## Rationale

- The effect library provides structured concurrency and explicit lifecycle management through scoped fiber execution, preventing orphaned background routines.
- Generator-based workflow syntax via Effect.gen allows sequential, readable asynchronous logic while maintaining full type safety and explicit failure tracking.
- Standardizing on Effect.catchCause and Effect.logWarning ensures failures during background tasks are captured and logged consistently without destabilizing parent workflows.

## Consequences

Positive:
- Uniform asynchronous programming model across core domain modules with clear error semantics.
- Robust background fiber supervision preventing resource leaks and unhandled rejections.
- Explicit, traceable error handling and warning diagnostics embedded in effect pipelines.

Negative:
- Learning curve for developers unfamiliar with functional effect paradigms and generator-driven syntax.
- Need to wrap third-party asynchronous interfaces and legacy promise-based APIs into effect structures.

## Alternatives

- Native Promise and Async-Await Orchestration (rejected)
  Rejected because: Native promises lack built-in structured concurrency, fiber cancellation, and fine-grained cause-based failure tracking, leading to unmonitored background tasks and brittle error capture.
  When valid: Simple, linear asynchronous operations in standalone scripts or isolated utility libraries where structured concurrency and fiber scoping are unnecessary.
- Custom Event Emitter and Deferred Promise Wrapper (rejected)
  Rejected because: Ad-hoc deferred wrappers and event emitters increase maintenance overhead and lack unified typing for asynchronous effects, failures, and resource scopes.
  When valid: Minimal isolated event dispatching outside core domain orchestration where adding runtime dependencies is strictly prohibited.

## Risks

- Developers unaccustomed to effect systems may introduce unmanaged promises or bypass generator-based effect flows.
  Mitigation: Provide internal architectural documentation, enforce effect usage via code reviews, and maintain reference examples demonstrating standard effect patterns.
  Owner: Core Engineering Team
- Uncaught causes within background fibers could fail silently if catch handlers omit proper logging.
  Mitigation: Enforce explicit cause logging through Effect.catchCause and Effect.logWarning on all scoped background executions.
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
- Construct asynchronous domain operations using Effect.gen, yielding effectful operations to ensure proper sequencing and deferred evaluation.
- When initiating background asynchronous tasks such as remote repository synchronization or cache warming, pipe the effect through Effect.catchCause for diagnostic logging and fork it into the ambient lifecycle scope using Effect.forkIn.

## Continuation Context


Verify commands:
- Discover and run the project type-checking script across core packages to ensure all effect types, error channels, and generator yields resolve correctly.
- Discover and execute the project automated test suite to confirm that asynchronous effect workflows, background fibers, and event publishing routines pass without regressions.
- Discover and run the project code quality and linting verification scripts to validate that asynchronous domain logic complies with architectural constraints.

Accept when:
- The project type-checking verification script completes with zero type errors across all core package modules.
- All unit and integration tests covering effect-driven workflows and background fiber execution execute successfully.
- Static verification scripts confirm that background operations are properly scoped and handled with appropriate effect error combinators.

## Enforcement

- Verified by: Automated continuous integration pipelines executing type validation, lint checks, and test suites on pull requests.
- Verified by: Peer architectural code review verifying that core domain asynchronous operations use the adopted effect library idioms.
- Violation handling: Pull requests introducing raw unhandled promises or bypassing effect error combinators in core workflows will be blocked until refactored.
- Violation handling: Static analysis or test suite failures in continuous integration reject merging non-compliant code.
- Exception process: Exceptions must be submitted via an architecture change proposal documenting why the effect runtime cannot be utilized for the specific use case.
- Exception process: Any approved exception requires explicit sign-off from the core architecture team and must be documented with an architectural decision amendment.