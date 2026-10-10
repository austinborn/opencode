# Adoption of solid-js for Reactive User Interface Architecture: Developers Inspect Repository Dependency Manifest Authoritative

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Client application interfaces require a declarative component rendering model that efficiently updates UI elements in response to changing state.
- Static dependency analysis across multiple application components and dialog views demonstrates consistent adoption of solid-js and its store primitives.
- A standardized rendering library avoids divergent view paradigms and unifies reactive state handling across modular dialogs, controls, and presentation components.

## Problem Statement

User interface components require a predictable, fine-grained reactive foundation to coordinate state updates and DOM interactions without incurring the overhead or state-synchronization complexity of multiple competing UI paradigms.

## Decision

1. MUST: Developers MUST inspect the repository dependency manifest and authoritative lock artifact to resolve the exact locked version of solid-js prior to introducing or updating reactive components.

## Policy Block

- MUST Developers MUST inspect the repository dependency manifest and authoritative lock artifact to resolve the exact locked version of solid-js prior to introducing or updating reactive components.

In scope:
- All user-facing interactive frontend components, dialogs, drawers, and presentation views.
- Stateful client UI modules that track user interactions and asynchronous data updates.

Out of scope:
- Headless background processing scripts and utility functions that do not render DOM elements.
- Independent platform adapters operating outside the client application rendering tree.

Exceptions:
- EX-20-001: A third-party embed requires isolated canvas or external non-reactive imperative DOM manipulation.

## Rationale

- The presence of solid-js across 11 distinct component and view modules demonstrates established adoption as the core reactive rendering technology.
- Fine-grained reactivity eliminates the computational overhead of virtual DOM reconciliation by updating only the DOM nodes linked to modified signals.
- Standardizing on solid-js ensures consistent component APIs, state primitives, and developer ergonomics across the frontend codebase.

## Consequences

Positive:
- High runtime rendering performance achieved through fine-grained reactive bindings and surgical DOM node updates.
- Consistent developer mental model for state management through reactive signals, stores, and contexts.
- Predictable component lifecycle without repeated re-rendering of entire component functions.

Negative:
- Signal destructuring limitations require careful adherence to reactivity preservation rules inherent to getter-based property access.
- Engineers unfamiliar with fine-grained reactivity must adapt from traditional virtual DOM diffing mental models.

## Alternatives

- Virtual DOM rendering libraries (rejected)
  Rejected because: Re-rendering whole component subtrees introduces unnecessary runtime diffing overhead compared to fine-grained signals.
  When valid: Valid when existing ecosystem constraints strictly necessitate virtual DOM compatibility layers.
- Imperative manual DOM manipulation (rejected)
  Rejected because: Manual DOM reconciliation creates high maintenance burden, state synchronization defects, and poor composability across dialog components.
  When valid: Valid only in minimal headless scripts or micro-widgets without reactive state.

## Risks

- Accidental loss of reactivity caused by props destructuring or improper signal access patterns.
  Mitigation: Establish linting rules and code review standards targeting reactive property access conventions.
  Owner: Frontend Engineering Team
- Version mismatch between reactive core primitives and companion ecosystem packages.
  Mitigation: Strictly adhere to the lock-version grounding policy by validating dependencies against the authoritative repository lock artifact.
  Owner: Frontend Engineering Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Preserve reactivity by accessing props via accessors rather than destructuring parameters at component boundaries.
- Encapsulate compound state in reactive stores for multi-field forms and dialog configurations to simplify batch updates.

## Continuation Context


Verify commands:
- Discover the test script declared in the repository manifest and execute the test runner to verify component behavior.
- Discover the type validation script declared in the project configuration and execute type checking across all reactive component sources.
- Discover the build script from the project manifest and execute the bundle compilation to ensure proper dependency resolution.

Accept when:
- All unit and component tests execute and pass through the discovered test verification pipeline.
- Type verification completes without errors across all solid-js reactive primitive usages.
- The application bundle builds successfully without unresolved reactive runtime imports.

## Enforcement

- Verified by: Automated continuous integration pipeline executing test suites and static analysis checks on pull requests.
- Verified by: Peer code review verifying adherence to reactive state patterns and signal handling.
- Violation handling: Pull requests introducing unmanaged DOM mutations or competing UI rendering libraries will fail code review and automated checks.
- Violation handling: Static analysis warnings must be addressed before merging into the main branch.
- Exception process: Submit an architectural review request detailing the technical necessity for non-standard DOM manipulation.
- Exception process: Obtain documented approval from frontend architecture leads and register the exception with lifecycle cleanup guards.