# Adoption of @solid-primitives/media for Reactive Media Queries: Before Implementing Updating Usages Solid Primitives

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Frontend interface panels including workspace sidebars, session side panels, terminal interfaces, and settings views require dynamic adaptation to changing viewport dimensions.
- Managing native browser matchMedia event subscriptions imperatively across multiple components introduces lifecycle boilerplate and risks memory leaks if listeners are not cleanly disposed.
- The codebase integrates @solid-primitives/media across multiple presentation modules to bind media query evaluations directly into the fine-grained reactivity graph.

## Problem Statement

Without a unified reactive media query utility, frontend components risk implementing disparate imperative window matchMedia event listeners. Disparate implementations lead to redundant resize listeners, inconsistent breakpoint definitions across layout panels, and potential memory leaks when subscriptions fail to clean up during component disposal.

## Decision

1. MUST: Before implementing or updating usages of @solid-primitives/media, engineers MUST inspect the repository dependency lock artifact to determine the exact resolved version and verify that all invoked primitive APIs exist within that release.

## Policy Block

- MUST Before implementing or updating usages of @solid-primitives/media, engineers MUST inspect the repository dependency lock artifact to determine the exact resolved version and verify that all invoked primitive APIs exist within that release.

In scope:
- Frontend layout containers, panels, and user interface components requiring dynamic responsiveness to viewport dimensions or media preferences.
- Reactive component scopes managing responsive presentation states in the web application.

Out of scope:
- Headless backend services, server-side utilities, or non-browser execution environments lacking window and media query contexts.
- CSS-only responsive styling handled entirely via static stylesheets without JavaScript state requirements.

## Rationale

- Adopting @solid-primitives/media standardizes media query handling across all layout and settings panels, ensuring consistent behavior across the interface.
- Primitives from @solid-primitives/media automatically bind to the reactive lifecycle, guaranteeing clean listener disposal and eliminating memory leaks.
- Consolidating media query evaluations into reactive primitives avoids duplicate DOM listeners across concurrent panel components.

## Consequences

Positive:
- Standardizes reactive media query handling across all layout and settings panels.
- Eliminates manual event listener cleanup boilerplate, preventing memory leaks during component destruction.
- Integrates viewport responsiveness directly into fine-grained reactive component state.

Negative:
- Introduces an external library dependency that must be maintained and tracked across repository packages.
- Requires engineers to understand the reactive primitive contract rather than relying directly on standard browser event interfaces.

## Alternatives

- Imperative window matchMedia listeners managed manually in component lifecycles (rejected)
  Rejected because: Requires repetitive boilerplate for attaching and removing event listeners, increasing the risk of memory leaks and divergent breakpoint definitions across panels.
  When valid: Valid in minimal standalone scripts or non-reactive environments where reactive primitive libraries are unavailable.
- CSS-only media queries without JavaScript reactive state integration (rejected)
  Rejected because: Cannot drive conditional component mounting, DOM-level layout reordering, or stateful controller adjustments required by complex interactive panels.
  When valid: Valid for purely presentational visual styling adjustments such as colors, paddings, and static layout visibility toggles.

## Risks

- Version divergence or breaking changes between the primitive library and the core reactive framework runtime.
  Mitigation: Strict lock-file version resolution and documentation verification before updating library dependencies.
  Owner: Frontend Engineering Team
- Excessive creation of redundant media query listeners across fine-grained child components.
  Mitigation: Encapsulate breakpoint detection in top-level layout containers and distribute reactive states downward.
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
- Inspect the project dependency manifest and lock artifact to resolve the exact version of the media primitives library before calling primitive functions.
- Consolidate breakpoint definitions into shared layout modules to prevent divergent query strings across panels.

## Continuation Context


Verify commands:
- Discover the workspace verification script from the root project manifest and execute the static type checker across all frontend packages.
- Discover and run the project test runner to execute component test suites verifying responsive layout behavior.

Accept when:
- Static type verification passes across all frontend modules without missing type definitions for media query primitives.
- Component test suites covering responsive panels execute successfully without unhandled event listener errors.

## Enforcement

- Verified by: Automated continuous integration workflows executing static analysis and test suites.
- Verified by: Peer code reviews verifying compliance with designated reactive media primitives.
- Violation handling: Pull requests introducing raw window matchMedia event listeners or unapproved responsive libraries will be blocked during review.
- Exception process: Exceptions require documented architectural justification and written approval from frontend technical leads before code merging.