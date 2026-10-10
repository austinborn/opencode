# Effect Library Adoption for Plugin and Provider Runtime: Plugin Provider Integration Modules Use Effect

Status: proposed
Date: 2025-02-18
Deciders: Detection Pipeline (automated)

## Context

- Core plugin and provider subsystems require structured management of asynchronous side effects, external HTTP communication, and model catalog mutations.
- Multiple integration modules concurrently implement provider configuration lowerers, variant generation routines, and tiered service definitions.
- Adopting a unified functional effect system eliminates inconsistent error handling and fragmented network client implementations across integrations.

## Problem Statement

Without a standardized functional runtime for asynchronous operations, external HTTP interactions, and catalog updates across plugin modules, integrations suffer from fragmented error handling, uncoordinated concurrency, and disparate network client implementations.

## Decision

1. MUST: Plugin and provider integration modules MUST use the Effect library for managing asynchronous execution, network requests, and effectful runtime operations.

## Policy Block

- MUST Plugin and provider integration modules MUST use the Effect library for managing asynchronous execution, network requests, and effectful runtime operations.

In scope:
- Core plugin definitions, provider adapters, and model catalog update handlers.
- Network requests and effectful side-effect pipelines within the provider integration lifecycle.

Out of scope:
- Presentation layer components and client-side view rendering modules.
- Isolated utility functions operating strictly on pure in-memory data structures without side effects.

## Rationale

- Adopting Effect establishes a uniform pattern for managing side effects, network requests via HttpClientRequest, and structured catalog modifications across all provider integrations.
- The pattern is substantiated across provider integration, model variant generation, and developer tiering modules, ensuring architectural consistency across the plugin domain.
- Effect provides composable error channels and cancellation semantics necessary for resilient external provider communications.

## Consequences

Positive:
- Standardizes asynchronous effect execution, error channels, and cancellation across all provider integration modules.
- Ensures uniform HTTP client interactions and credential isolation through Effect HTTP client primitives.
- Enables deterministic, functional model catalog mutations across diverse provider configurations.

Negative:
- Introduces a steeper learning curve for contributors unfamiliar with functional effect programming paradigms and conventions.
- Couples plugin runtime boundaries and asynchronous execution pipelines to the Effect library ecosystem.

## Alternatives

- Standard Promise and Native Fetch Architecture (rejected)
  Rejected because: Lacks typed error channels, composable interruption, and structured resource management required for resilient multi-provider operations.
  When valid: Lightweight utility modules or minimal external consumers where functional effect runtimes introduce disproportionate dependency footprint.
- Reactive Streams Architecture (rejected)
  Rejected because: Introduces unnecessary stream management overhead for predominantly request-response provider communication and discrete catalog updates.
  When valid: Subsystems characterized by continuous high-throughput event processing requiring complex temporal windowing and backpressure control.

## Risks

- API drift between evolving Effect library releases and plugin integration modules.
  Mitigation: Enforce strict dependency resolution verification using the project lock artifact before consuming new library capabilities.
  Owner: Core Infrastructure Team
- Inconsistent adoption where contributors bypass Effect to use raw promises or uncontrolled HTTP clients.
  Mitigation: Incorporate automated linting and static analysis rules to detect and prevent unmanaged side effects in plugin packages.
  Owner: Core Infrastructure Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Construct remote network operations using Effect HTTP client primitives to ensure uniform header handling and credential sanitization before request dispatch.
- Encapsulate provider and model catalog modifications within deterministic updater functions supplied to catalog mutation routines.

## Continuation Context


Verify commands:
- Discover the workspace verification script in the project manifest and execute the static analysis suite to confirm Effect import compliance across plugin modules.
- Discover and run the project test execution script to validate provider integration behavior and catalog mutation correctness.

Accept when:
- Static analysis validates that all plugin and provider modules import and invoke Effect primitives without unresolved symbols or unauthorized asynchronous runtimes.
- All plugin provider integration and catalog mutation test suites pass successfully without runtime errors.

## Enforcement

- Verified by: Automated continuous integration static analysis verifying module imports and runtime usage constraints.
- Verified by: Mandatory peer code review on all pull requests updating plugin or provider integration code.
- Violation handling: Pull requests introducing unmanaged asynchronous primitives or bypassing Effect primitives will be blocked by continuous integration gates until refactored.
- Exception process: Architectural review requested via maintainer issue documenting why the functional effect runtime cannot support the specific integration requirements.