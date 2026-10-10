# Adoption of @solidjs/router for Client-Side Routing and Navigation State: Inspect Repository Lock Artifact Verify Exact

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The client application requires structured URL routing, nested view layouts, and reactive route parameter synchronization across multiple views and controllers.
- Evidence across twenty-four frontend application files demonstrates consistent adoption of @solidjs/router for managing navigation state, path parameters, and query parameters.
- Ad-hoc browser history manipulation and disparate routing implementations cause state desynchronization and disrupt reactive component boundaries.

## Problem Statement

Frontend applications require a reliable, unified mechanism to coordinate browser navigation, nested view hierarchies, and parameter-driven state. Without a standardized routing library, individual components risk implementing divergent URL handling, leading to synchronization failures, broken browser history traversal, and tight coupling to manual window events.

## Decision

1. MUST: MUST inspect the repository lock artifact to verify the exact resolved version of @solidjs/router prior to introducing or updating route-dependent implementations.

## Policy Block

- MUST MUST inspect the repository lock artifact to verify the exact resolved version of @solidjs/router prior to introducing or updating route-dependent implementations.

In scope:
- Client-side frontend view components, layout controllers, and contextual state providers requiring URL navigation or parameter access.

Out of scope:
- Backend services, command-line utilities, headless background workers, and shared utility modules operating outside browser view rendering.

## Rationale

- Adopting @solidjs/router aligns client navigation directly with the fine-grained reactive primitives of the view framework, enabling efficient updates without full-tree re-renders.
- Centralizing route definitions and parameter hooks eliminates divergent history-parsing logic across disparate layout and session controllers.
- Standardizing on a single routing library simplifies dependency management and ensures consistent navigation behavior across all application views.

## Consequences

Positive:
- Provides declarative route parameter and query string synchronization across view controllers and state contexts.
- Establishes a uniform hierarchical layout architecture and navigation lifecycle throughout the client codebase.
- Integrates seamlessly with the fine-grained reactivity model, avoiding unnecessary DOM element recreation during route transitions.

Negative:
- View components and layout controllers become coupled to the adopted routing interface and hook conventions.
- Upstream router API updates necessitate synchronized verification across all dependent view modules.

## Alternatives

- Custom browser history state management (rejected)
  Rejected because: Manual URL manipulation and window history event listeners increase maintenance overhead and fail to provide fine-grained reactivity with the view layer.
  When valid: Lightweight standalone micro-applications with flat single-view architectures.
- Framework-agnostic external routing solutions (rejected)
  Rejected because: Generic external routers lack native integration with component reactive lifecycles and fine-grained signal subscriptions.
  When valid: Multi-framework federated architectures requiring shared URL synchronization across disparate rendering engines.

## Risks

- Tight coupling of application view contexts to specific router primitives and hook signatures.
  Mitigation: Encapsulate router hook invocations within dedicated context wrappers and layout controllers rather than scattering direct router calls across leaf presentation components.
  Owner: Engineering Team
- Upstream breaking changes in routing primitives across library upgrades.
  Mitigation: Enforce strict lockfile version grounding and validate route transitions via automated integration suites.
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
- Abstract router parameter extraction and query state resolution within dedicated layout controllers or context providers to maintain clean leaf component boundaries.
- Structure nested route configurations to mirror the logical visual hierarchy, isolating persistent application chrome from dynamic child content.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting verification scripts to validate import boundaries and router usage compliance.
- Discover and execute the project automated test suites to ensure route navigation and parameter resolution pass without regressions.
- Inspect the repository lock artifact using the project resolution verification procedure to confirm dependency consistency.

Accept when:
- Static analysis and dependency verification scripts complete with zero violations across all modules importing the routing library.
- Automated test suites verify that route parameter parsing and nested view transitions function correctly across all layout components.
- All active client views and navigation state managers derive route parameters exclusively through the adopted routing interface.

## Enforcement

- Verified by: Automated static analysis checks and dependency boundary validations during continuous integration.
- Verified by: Peer architectural review for pull requests adding or altering view routes and navigation controllers.
- Violation handling: Pull requests introducing unapproved routing libraries or direct browser history manipulation are rejected.
- Exception process: Architectural review and formal decision record amendment documented prior to implementing alternative navigation patterns.