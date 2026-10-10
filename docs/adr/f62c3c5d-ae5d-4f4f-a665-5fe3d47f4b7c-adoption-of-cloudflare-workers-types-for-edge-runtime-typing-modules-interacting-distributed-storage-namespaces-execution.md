# Adoption of @cloudflare/workers-types for Edge Runtime Typing: Modules Interacting Distributed Storage Namespaces Execution

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Edge compute functions and cloud resource definitions operate within specialized serverless execution environments requiring precise contract boundaries.
- Multiple modules across function execution and resource management layers interact directly with edge runtime bindings, storage namespaces, and request lifecycles.
- Adopting standardized type definitions prevents runtime type mismatches and eliminates manual ambient declarations.

## Problem Statement

Edge compute environments present distinct runtime APIs and execution contexts that diverge from standard runtime environments, creating high risk of ambient type mismatches and runtime failures when interfaces are left untyped or manually declared.

## Decision

1. SHOULD: Modules interacting with distributed storage namespaces or execution environments SHOULD consume specific binding interfaces provided by @cloudflare/workers-types rather than generic untyped representations.

## Policy Block

- SHOULD Modules interacting with distributed storage namespaces or execution environments SHOULD consume specific binding interfaces provided by @cloudflare/workers-types rather than generic untyped representations.

In scope:
- All serverless edge function handlers, background log processors, and worker execution routines.
- Cloud resource definitions managing edge storage namespaces and runtime bindings.

Out of scope:
- Client-side user interface components executing exclusively in consumer web browsers.
- Build tool scripts and repository maintenance automation running in standard runtime environments.

Exceptions:
- EXC-001: Modules strictly executing within non-edge environments that share no execution context with serverless worker runtimes.

## Rationale

- Evidence indicates widespread adoption of @cloudflare/workers-types across edge log processing, authentication handlers, and resource layers.
- Relying on authoritative vendor-provided type definitions eliminates human error in typing platform bindings and runtime lifecycles.
- Standardized typing guarantees uniform contract surfaces across distributed worker functions and infrastructure abstractions.

## Consequences

Positive:
- Guarantees compile-time validation for edge execution contexts, request lifecycles, and storage bindings.
- Prevents ambient global type pollution by establishing explicit contract boundaries across worker modules.
- Enhances developer ergonomics with accurate interface completions for platform capabilities.

Negative:
- Couples edge module signatures directly to platform-specific runtime type contracts.
- Requires disciplined lock artifact tracking to prevent subtle divergence between compile-time definitions and deployed runtime behaviors.

## Alternatives

- Manual ambient declarations for edge runtime APIs and global interfaces (rejected)
  Rejected because: Manual declarations increase maintenance overhead, lack comprehensive coverage, and diverge from upstream platform runtime behaviors.
  When valid: Valid only when targeting niche or custom runtimes that lack official type definition packages.
- Untyped dynamic access for edge request context and storage bindings (rejected)
  Rejected because: Bypassing static typing eliminates compile-time contract enforcement and exposes service boundaries to preventable runtime exceptions.
  When valid: Valid only for exploratory proof-of-concept scripts outside production delivery pipelines.

## Risks

- Version drift between installed type definitions and the active deployment runtime environment.
  Mitigation: Synchronize dependency resolution artifacts with target deployment runtime specifications via continuous integration gates.
  Owner: engineering team
- Over-coupling shared domain models to vendor-specific runtime interfaces.
  Mitigation: Structure domain interfaces to decouple core application business logic from platform-specific binding types.
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
- Isolate runtime-specific type dependencies to edge module boundaries to maintain modularity in shared business logic.
- Configure project compilation targets so edge execution typings do not conflict with standard platform globals in other workspace layers.

## Continuation Context


Verify commands:
- Discover the project type verification script and execute static analysis across all edge function and resource packages.
- Inspect repository dependency manifests and resolution artifacts to confirm @cloudflare/workers-types is declared in required runtime scopes.

Accept when:
- Static type verification across edge function and resource modules passes with zero errors.
- Dependency declarations in project manifests strictly align with resolved versions in the repository lock artifact.

## Enforcement

- Verified by: Automated static type analysis executed during continuous integration workflows.
- Verified by: Mandatory peer review verification on pull requests modifying edge function contracts or dependencies.
- Violation handling: Build failure blocking pull request merging on any static type diagnostic error.
- Violation handling: Immediate remediation required for modules bypassing edge type definitions with unchecked casts.
- Exception process: Submit an architectural RFC detailing why official platform type definitions cannot represent the target execution environment.
- Exception process: Obtain approval from lead systems architects before introducing custom ambient runtime shims.
- Exception process: Document all temporary type augmentations with an expiration timeline and tracking issue.