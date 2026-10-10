# Adoption of solid-js/store for Structured Reactive State Management: Application Use Solid Store Standard Reactive

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application components and context modules manage complex nested state structures including UI tabs, prompt histories, model selections, and configuration bindings.
- Fine-grained reactive frameworks require specialized proxy structures to track nested property mutations without triggering root-level component re-evaluations.
- Direct dependency on solid-js/store is observed uniformly across eighteen files in the application client architecture.

## Problem Statement

Managing complex, nested, and collection-oriented application state using discrete reactive signals creates synchronization friction, repetitive property propagation, and redundant component re-rendering. The client architecture requires a standardized, fine-grained state management solution that tracks nested property access and mutation through reactive proxies without destabilizing rendering performance.

## Decision

1. MUST: The application MUST use solid-js/store as the standard reactive state management module for all multi-property, collection-based, or deeply nested state structures across application components and context providers.

## Policy Block

- MUST The application MUST use solid-js/store as the standard reactive state management module for all multi-property, collection-based, or deeply nested state structures across application components and context providers.

In scope:
- Frontend state management across application components, shared context providers, and transient state stores.
- Management of structured, nested, or collection-based reactive state.

Out of scope:
- Independent scalar state primitives that require no nested properties or coordinated updates.
- Stateless presentation components and pure utility functions.

## Rationale

- Adopting solid-js/store provides proxy-wrapped reactive objects that isolate updates strictly to accessed properties, avoiding unnecessary parent component re-renders.
- Observed implementation patterns demonstrate consistent usage of solid-js/store across UI controls, contexts, and transient stores, standardizing reactive state semantics across the codebase.
- Proxy-based stores allow nested state modifications via granular mutation paths without requiring deep immutability cloning overhead.

## Consequences

Positive:
- Provides fine-grained reactive updates at the property level, maximizing UI rendering efficiency.
- Eliminates boilerplate synchronization code previously required when coordinating multiple related scalar signals.
- Standardizes the state management paradigm across client components, tab navigation, dialogs, and context providers.

Negative:
- Introduces reactivity loss risks if developers destructure store properties without reactivity-preserving primitives.
- Adds conceptual overhead in distinguishing when to employ scalar signals versus proxy-backed stores.

## Alternatives

- Exclusive reliance on primitive reactive signals with manual object cloning (rejected)
  Rejected because: Manual object copying triggers widespread re-evaluations of downstream reactive computations, degrading performance across complex nested state.
  When valid: Valid only for isolated scalar state that does not contain nested object hierarchies.
- Adoption of external state management libraries outside the native framework ecosystem (rejected)
  Rejected because: External state libraries lack native integration with framework-level reactivity tracking and increase dependency footprint unnecessarily.
  When valid: Valid when state must be shared across disparate application runtimes or non-reactive presentation layers.

## Risks

- Unintended loss of reactive tracking caused by destructuring store properties within component scopes.
  Mitigation: Enforce static analysis rules and code review standards that mandate direct store property access or unwrapping helpers.
  Owner: Frontend engineering team
- Overuse of stores for simple scalar values, increasing proxy wrapping overhead where basic signals suffice.
  Mitigation: Establish architecture guidelines restricting store usage to nested structures, collections, and multi-field domain state.
  Owner: Frontend engineering team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Initialize component and context state using createStore, keeping mutation operations localized to dedicated actions or setters to preserve unidirectional data flow.
- When updating collections or deep trees, prefer path syntax or produce utilities from solid-js/store to preserve object identity for unchanged branches.

## Continuation Context


Verify commands:
- Discover the workspace script configuration from the dependency manifest and execute the static type checker across application packages.
- Discover and run the project code verification and lint suite to confirm compliant usage of solid-js/store across UI components and contexts.
- Discover the project test runner script and execute test suites covering stores, contexts, and reactive components.

Accept when:
- Static type analysis passes with zero type errors across all modules importing solid-js/store.
- Lint verification confirms no prohibited store property destructuring patterns in reactive component bodies.
- All component, store, and context test suites execute successfully.

## Enforcement

- Verified by: Continuous integration static analysis and type checking verification scripts.
- Verified by: Peer code review inspecting reactive state declarations and mutation patterns.
- Violation handling: Pull requests containing untracked destructuring or non-standard state implementations fail continuous integration checks and require remediation.
- Exception process: Architectural exceptions must be reviewed and approved by the frontend engineering leads with documented rationale in the pull request.