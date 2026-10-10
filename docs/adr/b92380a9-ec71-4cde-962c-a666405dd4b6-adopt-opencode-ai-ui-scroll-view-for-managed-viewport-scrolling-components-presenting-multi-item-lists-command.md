# Adopt @opencode-ai/ui/scroll-view for Managed Viewport Scrolling: Components Presenting Multi Item Lists Command

Status: proposed
Date: 2025-05-14
Deciders: Detection Pipeline (automated)

## Context

- Interactive views and modal overlays require consistent scrolling behavior, overflow containment, and viewport state propagation across the application.
- Multiple distinct presentation components directly consume @opencode-ai/ui/scroll-view to encapsulate scroll containers and handle viewport updates.
- Decentralized overflow properties cause divergent scrollbar appearances and fragmented scroll position synchronization across dialogs and main views.

## Problem Statement

Application views and dialog components require a unified scrollable container mechanism to ensure consistent viewport update tracking, accessible scrollbar behavior, and predictable layout boundaries without relying on fragmented manual overflow styles.

## Decision

1. MUST_NOT: Components presenting multi-item lists or command palettes MUST NOT apply unmanaged native overflow styles in place of @opencode-ai/ui/scroll-view.

## Policy Block

- MUST_NOT Components presenting multi-item lists or command palettes MUST NOT apply unmanaged native overflow styles in place of @opencode-ai/ui/scroll-view.

In scope:
- All application views, session list panels, and command palette dialogs requiring scrollable viewport management

Out of scope:
- Static non-scrollable layouts and single-screen containers that fit entirely within default viewport dimensions

## Rationale

- Adopting @opencode-ai/ui/scroll-view across pages and dialogs guarantees consistent viewport containment and keyboard and pointer scroll ergonomics across disparate views.
- Standardizing viewport update events through the container component simplifies scroll position persistence and coordinate synchronization between views and controllers.
- Encapsulating scroll behavior in a shared UI package prevents code duplication and divergence in custom styling across distinct application modules.

## Consequences

Positive:
- Uniform scroll presentation and viewport behavior across application views, command palettes, and session listings.
- Centralized maintenance of scrolling performance optimizations and platform-specific scroll styling.
- Reliable propagation of scroll viewport offsets for reactive view state and controller logic.

Negative:
- Direct dependency on the internal UI package contract for all scrollable viewport layouts.
- Slightly increased component hierarchy depth compared to raw container elements.

## Alternatives

- Unmanaged native CSS overflow properties on arbitrary container elements (rejected)
  Rejected because: Creates divergent scroll behavior, inconsistent scrollbar styling, and disjointed viewport offset tracking across features.
  When valid: Simple text containers with static layout where viewport coordinate synchronization is unnecessary.
- Third-party generic virtualized scrolling library (rejected)
  Rejected because: Introduces unnecessary external dependency overhead and misaligns with existing workspace component design tokens.
  When valid: Extremely large datasets requiring DOM virtualization that exceeds the capability of standard scroll views.

## Risks

- Breaking API changes in the internal UI package could affect multiple view pages and dialogs simultaneously.
  Mitigation: Enforce strict dependency resolution verification from the lock artifact and validate view regressions during dependency updates.
  Owner: engineering team
- Frequent viewport scroll events could introduce performance bottlenecks if event handlers trigger heavy layout operations.
  Mitigation: Isolate viewport update handlers and ensure scroll state subscriptions avoid unnecessary full-tree re-renders.
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
- Integrate @opencode-ai/ui/scroll-view at the view container boundary, wiring viewport scroll events directly to controller state when scroll position tracking is required.
- Verify that dialog overlays and modal sheets constrain the scroll view height to avoid nested window-level scroll collisions.

## Continuation Context


Verify commands:
- Discover the repository static analysis and type verification script from the manifest and run it to verify @opencode-ai/ui/scroll-view integration.
- Discover and execute the project unit and component test suites to validate scroll container rendering and viewport update handling.

Accept when:
- Static analysis confirms all designated scrollable views and dialogs import and render @opencode-ai/ui/scroll-view without type errors.
- Component and view test suites pass with viewport scroll events successfully captured and handled.

## Enforcement

- Verified by: Automated static analysis checks in the continuous integration pipeline
- Verified by: Peer review of view component pull requests
- Violation handling: Automated pipeline failures on unmanaged overflow container usage in view and dialog modules
- Violation handling: Code review rejection requiring refactoring to @opencode-ai/ui/scroll-view
- Exception process: Architecture review submission detailing why the shared scroll view container cannot meet specific rendering or virtualization constraints