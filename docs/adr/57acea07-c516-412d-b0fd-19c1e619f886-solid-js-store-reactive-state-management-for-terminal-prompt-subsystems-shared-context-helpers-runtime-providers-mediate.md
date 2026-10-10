# solid-js/store Reactive State Management for Terminal Prompt Subsystems: Shared Context Helpers Runtime Providers Mediate

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Terminal prompt subsystems require fine-grained reactivity to coordinate interactive user inputs, historical recall, and frecency ordering without triggering full-component tree re-renders.
- Component state across prompt history, frecency tracking, and prompt stashes relies on proxy-backed mutable store operations that synchronize with serialized line-delimited records.
- Solid.js reactive stores provide localized tree mutation tracking and granular signal subscriptions suitable for terminal interface rendering lifecycles.

## Problem Statement

Terminal prompt user interface components require fine-grained reactive state synchronization for history recall, frecency calculation, and stashed prompt management without incurring the overhead of coarse-grained component re-rendering or manual event subscription plumbing.

## Decision

1. SHOULD: Shared context helpers and runtime providers SHOULD mediate access to solid-js/store instances across terminal prompt subcomponents.

## Policy Block

- SHOULD Shared context helpers and runtime providers SHOULD mediate access to solid-js/store instances across terminal prompt subcomponents.

In scope:
- Interactive terminal user interface prompt subsystems managing history, frecency ranking, and prompt stashing.
- Reactive state containers requiring granular signal notifications upon collection mutation.

Out of scope:
- Stateless terminal rendering primitives and static display components.
- Non-terminal background services and standalone utility modules without UI lifecycles.

## Rationale

- Fine-grained reactive stores in solid-js/store isolate updates to the specific object properties being mutated, preventing unnecessary terminal screen redraws.
- Co-locating reactive stores with line-based deserialization patterns ensures that history recall and frecency calculations maintain immediate consistency with persisted state.
- Standardizing on solid-js/store maintains architectural consistency across terminal prompt components while avoiding architectural divergence into multiple competing state libraries.

## Consequences

Positive:
- Granular reactivity eliminates terminal frame flicker by updating only modified prompt data nodes.
- Consistent store API patterns across prompt modules reduce cognitive load and simplify cross-component state synchronization.
- Proxy-backed stores provide a predictable mutation interface that integrates cleanly with context helpers and terminal runtimes.

Negative:
- Couples terminal prompt state logic to the Solid.js reactivity runtime and proxy semantics.
- Requires developers to adhere strictly to store mutation conventions to avoid accidental reactivity loss through direct object destructuring.
- Line parsing and store hydration overhead must be monitored for large history buffers.

## Alternatives

- Standard Solid.js signals for primitive collection state (rejected)
  Rejected because: Primitive signals require shallow array cloning and complete array replacement on every prompt append or re-ranking, triggering redundant subscription recalculations.
  When valid: Valid for isolated scalar values and non-nested boolean flags where collection mutation semantics are absent.
- External centralized state management libraries (rejected)
  Rejected because: Introduces unnecessary bundle overhead and external dispatch boilerplate that conflicts with the lightweight reactive paradigm of the terminal UI framework.
  When valid: Valid in multi-tier applications requiring distributed state persistence across web and service boundaries.

## Risks

- Accidental property destructuring of store objects resulting in broken reactive update propagation to terminal components.
  Mitigation: Enforce static analysis rules and code review guidelines requiring store access via accessors or store helper utilities.
  Owner: engineering team
- Unvalidated input lines causing runtime parsing errors during store hydration from local prompt storage.
  Mitigation: Enforce defensive validation handling around serialization and deserialization routines prior to mutating store state.
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
- Discover the project dependency manifest to confirm the adopted reactive store module and verify that store initialization occurs within context provider scopes.
- Ensure store setters utilize path-based mutation patterns or store mutation producers to maintain structural sharing and avoid full store cloning.

## Continuation Context


Verify commands:
- Discover the project test runner and execute the test suite covering prompt reactive stores.
- Discover the workspace static analysis and type check utilities and verify compliance across terminal prompt modules.
- Execute the repository linting verification to detect unhandled store property destructuring.

Accept when:
- All terminal prompt test suites pass with zero reactivity regression failures.
- Static type checking confirms type safety across all solid-js/store mutation calls and context accessors.
- Store hydration routines safely process input lines without throwing unhandled exceptions.

## Enforcement

- Verified by: Continuous integration checks running automated tests and type verification suites.
- Verified by: Code review inspection of reactive store mutation patterns and lifecycle bindings.
- Violation handling: Pull requests introducing unapproved state libraries or direct proxy mutation violations are blocked until corrected.
- Violation handling: Reactivity anti-patterns identified in code review must be refactored to use standard store setters.
- Exception process: Exceptions require submission of an architectural review request and approval by the engineering lead.
- Exception process: Approved exceptions must be documented with an architectural rationale and containment strategy.