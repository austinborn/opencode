# Adoption of Effect as Core Runtime and Effect Management Library: Generated Http Client Boundaries Transport Layers

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The codebase implements a multi-package architecture spanning command-line interfaces, language execution interpreters, client SDK generation, and user interface components.
- Asynchronous operations, typed error handling, and platform abstractions require a coherent execution model across all workspace packages.
- Multiple packages import the Effect library along with its platform and transport modules to govern effect execution, structured concurrency, and service boundaries.

## Problem Statement

Maintaining disparate execution paradigms and error models across CLI commands, client SDKs, interpreter runtimes, and user interfaces leads to unhandled runtime failures, inconsistent async orchestration, and boundary friction. A standardized functional effect framework is required to enforce typed failure channels, composable operations, and uniform platform abstractions across all packages.

## Decision

1. SHOULD: Generated HTTP client boundaries and transport layers SHOULD use Effect HTTP and encoding modules to maintain typed service contracts.

## Policy Block

- SHOULD Generated HTTP client boundaries and transport layers SHOULD use Effect HTTP and encoding modules to maintain typed service contracts.

In scope:
- All workspace packages implementing service logic, CLI commands, interpreter runtimes, and client communication.

Out of scope:
- Third-party platform integrations or isolated UI component styling where effect tracking is not applicable.

## Rationale

- Evidence demonstrates twenty workspace modules consistently importing Effect and its specialized modules for runtime execution, HTTP abstractions, and error management.
- Standardizing on Effect guarantees explicit, compile-time verified failure types across complex interpreter operations and service interactions.
- Consolidating effect orchestration into a single foundational library eliminates divergent async paradigms across CLI, runtime, and client packages.

## Consequences

Positive:
- Compile-time safety and explicit typed error propagation across all adopting workspace packages.
- Standardized patterns for resource management, concurrency control, and platform abstraction.
- Unified integration path between generated HTTP API clients and consumer service layers.

Negative:
- Steep learning curve for developers unfamiliar with functional effect systems and combinator idioms.
- Increased cognitive overhead when bridging between native asynchronous promises and Effect workflows.

## Alternatives

- Standard Promise and Async/Await with Manual Error Classes (rejected)
  Rejected because: Native promises lack typed failure channels, structured concurrency primitives, and composable resource management, increasing the probability of unhandled runtime exceptions across distributed packages.
  When valid: Valid in lightweight standalone utility scripts where dependency overhead outweighs the benefits of a full effect system.
- Alternative Reactive Stream Frameworks (rejected)
  Rejected because: Reactive stream systems prioritize continuous event streams over single-value typed effects and introduce mismatched semantics for discrete request-response and interpreter execution flows.
  When valid: Valid when the primary workload consists of high-frequency continuous event streaming without discrete structured service boundaries.

## Risks

- Steep learning curve and conceptual complexity associated with functional effect programming paradigms across contributing engineers.
  Mitigation: Provide internal architectural guidance, reference module patterns, and shared helpers to standardise common effect construction and execution patterns.
  Owner: Engineering Team
- API surface churn across unstable or evolving effect ecosystem submodules.
  Mitigation: Pin dependencies using repository lock resolution artifacts and verify exact upstream documentation before adopting new submodule capabilities.
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
- When constructing service boundaries or interpreter workflows, compose operations through Effect combinator patterns rather than imperative error handling.
- Ensure that boundary crossing between external asynchronous APIs and internal Effect workflows explicitly maps untyped rejections into structured domain error types.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and type verification script to ensure all Effect imports and combinator types resolve without errors.
- Discover and run the project test suite to validate that effect-based error channels and service runtimes execute as expected.

Accept when:
- Static type analysis passes across all workspace packages with zero type errors in Effect-managed signatures.
- All unit and integration test suites validating Effect-managed services and interpreters pass successfully.

## Enforcement

- Verified by: Continuous integration type checking and static analysis workflows.
- Verified by: Peer code review verifying adherence to Effect error handling and boundary conventions.
- Violation handling: Pull requests introducing raw unhandled promises or throwing untyped exceptions in Effect-governed modules are blocked pending remediation.
- Exception process: Submit an architectural review request with justification when third-party interoperability strictly requires native promise interfaces without Effect wrapping.