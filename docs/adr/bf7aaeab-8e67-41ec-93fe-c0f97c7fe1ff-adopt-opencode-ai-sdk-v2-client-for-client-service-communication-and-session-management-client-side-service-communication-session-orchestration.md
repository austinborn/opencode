# Adopt @opencode-ai/sdk/v2/client for Client Service Communication and Session Management: Client Side Service Communication Session Orchestration

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The client application requires coordinated communication with backend services for session management, model querying, directory synchronization, and command execution.
- A shared client interface package `@opencode-ai/sdk/v2/client` provides uniform contracts and protocol handling across disparate UI views and context synchronizers.
- Fifteen context synchronization modules, user interface components, and end-to-end fixtures consistently import and invoke `@opencode-ai/sdk/v2/client` for service interactions.

## Problem Statement

Without a standardized client SDK contract, disparate application components and state synchronizers risk implementing redundant, inconsistent network transport logic and schema parsing, leading to protocol drift and fragility during backend evolution.

## Decision

1. MUST: All client-side service communication, session orchestration, provider interaction, and workspace synchronization operations MUST use `@opencode-ai/sdk/v2/client` rather than raw network transport layers or unmanaged protocol invocations.

## Policy Block

- MUST All client-side service communication, session orchestration, provider interaction, and workspace synchronization operations MUST use `@opencode-ai/sdk/v2/client` rather than raw network transport layers or unmanaged protocol invocations.

In scope:
- Client context providers, synchronization controllers, UI components, and test fixtures initiating backend operations.
- Session management, provider and model querying, and worktree state synchronization.

Out of scope:
- Internal server-side daemon or host processes that execute outside the client application bundle.
- Pure local in-memory utility functions that perform neither network communication nor session state synchronization.

## Rationale

- Centralizing backend interaction around `@opencode-ai/sdk/v2/client` guarantees static type safety and contract coherence across client context reducers and user interface components.
- Observed adoption across fifteen distinct functional modules establishes the client SDK as the standard protocol boundary for the application.
- Aligning state synchronization contexts with a single SDK interface simplifies cache invalidation, session trimming, and error recovery across the frontend architecture.

## Consequences

Positive:
- Ensures unified protocol compliance and compile-time contract verification across all client service consumers.
- Streamlines state synchronization and cache management by centralizing session and model data access patterns.
- Reduces redundant transport and serialization code across individual user interface components.

Negative:
- Couples client context managers and UI components to the versioned release cycle of the SDK package.
- Requires client-side adapters to isolate UI component state from sudden changes in backend SDK data structures.

## Alternatives

- Direct fetch and WebSocket communication using raw transport protocols (rejected)
  Rejected because: Bypassing the standardized SDK introduces duplicate serialization logic, inconsistent error handling, and loss of shared compile-time type safety across client modules.
  When valid: Lightweight diagnostic utilities or external scripts operating outside the main application codebase where dependency footprint must be minimized.
- Decentralized service wrappers per feature module (rejected)
  Rejected because: Custom per-module service abstractions create divergent contract definitions and complicate lifecycle synchronization across shared UI contexts.
  When valid: Experimental prototypes evaluating new unreleased protocols prior to formal SDK standardization.

## Risks

- Breaking API changes in upstream SDK client releases could disrupt dependent synchronization contexts and UI components simultaneously.
  Mitigation: Strictly enforce lock-version grounding and comprehensive integration test suites across synchronization reducers prior to upgrading client dependency boundaries.
  Owner: client architecture team
- Tight coupling between reactive UI stores and client SDK response formats could impede client-side data schema refactoring.
  Mitigation: Maintain explicit adapter and normalization layers within synchronization contexts to insulate presentation components from direct SDK response payloads.
  Owner: frontend engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Encapsulate SDK calls within dedicated synchronization hooks or context actions rather than embedding direct remote invocations inside presentation render paths.
- Apply normalization routines when ingesting model and provider collections to maintain consistent data structures across UI consumers.

## Continuation Context


Verify commands:
- Discover and execute the repository type-checking suite to verify static contract compliance for all client SDK invocations.
- Discover and run the repository client test suite to ensure that session lifecycle and synchronization workflows function against the client SDK contracts.

Accept when:
- All client modules invoking backend services compile without type discrepancies against `@opencode-ai/sdk/v2/client` interfaces.
- All automated synchronization and client test suites pass without unhandled transport or contract rejections.

## Enforcement

- Verified by: Automated static type analysis and module import linting in the continuous integration pipeline.
- Verified by: Architectural code review evaluating client-server communication boundaries in pull requests.
- Violation handling: Pull requests introducing direct transport requests or unauthorized custom service clients are rejected during automated checks and code review.
- Exception process: Architectural exceptions require formal proposal to the lead client architect demonstrating why the standardized SDK cannot accommodate the protocol requirement.