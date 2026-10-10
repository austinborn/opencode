# Effect Adoption for Contextual Service Management and Database Runtime Execution: Before Implementing Code That Depends Effect

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The codebase supports heterogeneous SQLite runtime environments that require consistent database session handling and driver configuration.
- Raw asynchronous primitives lack standardized contextual dependency injection and deterministic resource lifecycle disposal across distributed modules.
- The codebase establishes internal integration packages to wrap platform-specific database clients into unified effect-oriented programming interfaces.
- Multiple database driver adapters across the repository consistently import and interact with Effect runtime modules.

## Problem Statement

Heterogeneous runtime environments require a unified approach to managing database connections, driver settings, and transaction boundaries. Direct invocation of platform-specific database drivers without a consistent context and lifecycle abstraction leads to fragmented error handling, unmanaged connection lifecycles, and ad-hoc dependency passing across package boundaries.

## Decision

1. MUST: Before implementing code that depends on Effect, the consumer MUST inspect the project dependency manifest and resolve the exact locked version from the repository lock artifact.

## Policy Block

- MUST Before implementing code that depends on Effect, the consumer MUST inspect the project dependency manifest and resolve the exact locked version from the repository lock artifact.

In scope:
- Core database modules, platform-specific database adapters, and database session integration layers within the repository.
- All internal services and workspace libraries defining or consuming database client abstractions.

Out of scope:
- External consumer applications consuming static schema definitions without runtime execution logic.
- Third-party platform bindings that execute entirely outside the application runtime boundary.

Exceptions:
- EXC-20-001: Low-level platform bootstrap scripts require standalone synchronous execution before the primary runtime environment is initialized.

## Rationale

- Effect provides unified context injection and structured lifecycle management that operates identically across diverse runtime environments.
- Using Context.get within fiber contexts enables transparent configuration distribution without polluting function signatures with plumbing parameters.
- Structured resource finalization through Scope and Exit guarantees database handles and transactions terminate safely without connection leaks.

## Consequences

Positive:
- Consistent type-safe dependency resolution and configuration management across all database driver implementations.
- Deterministic resource reclamation during transaction completion or runtime failure through structured scoping.
- Harmonized error handling and composable database query pipelines across different platform backends.

Negative:
- Increased cognitive load for engineers required to understand functional effect systems and fiber runtime semantics.
- Requirement to wrap standard asynchronous driver calls into Effect constructs, introducing indirection.

## Alternatives

- Native asynchronous Promises and manual try-finally cleanup blocks (rejected)
  Rejected because: Native promises lack contextual dependency propagation and rely on manual error cleanup that is prone to connection leaks.
  When valid: Single-file command-line utilities with trivial linear lifecycles.
- Global singleton database client instances (rejected)
  Rejected because: Global singletons hinder multi-environment portability and prevent contextual driver configuration per fiber.
  When valid: Static mock environments with no concurrency or runtime variability.

## Risks

- Unfamiliarity with Effect lifecycle semantics can lead to unhandled fiber failures or improperly scoped connections.
  Mitigation: Establish standard wrapper layers and automated static analysis to verify proper Scope and Exit usage.
  Owner: Engineering Team
- Unstable internal API changes in experimental Effect modules could break driver session adapters.
  Mitigation: Isolate external library APIs within internal session abstraction modules and verify behavior against repository test suites.
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
- Implement database client adapters by deriving driver configuration from the active fiber context through Context.get rather than parameter drilling.
- Ensure all database sessions acquire and release connection resources within Scope blocks to guarantee automatic closure upon exit.

## Continuation Context


Verify commands:
- Discover the workspace dependency manifest and execute the designated type-checking script to confirm valid Effect API usage.
- Discover the repository test runner from the project manifest and execute the database integration test suite.

Accept when:
- All database adapter implementations pass type checking with zero compiler errors across all workspace packages.
- Database session integration test suites pass successfully with deterministic connection cleanup confirmed.

## Enforcement

- Verified by: Automated continuous integration pipeline executing repository validation and test suites on pull requests.
- Verified by: Architectural peer code review verifying adherence to Effect context propagation and Scope usage.
- Violation handling: Pull requests introducing unmanaged database connections or bypassing Effect runtime primitives are blocked from merging.
- Violation handling: Non-compliant code must be refactored to use standard Effect session and Context patterns before approval.
- Exception process: Exceptions must be documented in the module with justification and reviewed by technical leads prior to merge.