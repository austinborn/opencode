# Adoption of @opencode-ai/ui/tabs for Tabbed Interface Navigation: Dialogs Popover Bodies Presenting Multi Section

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple user interface surfaces including settings dialogs, terminal session managers, and status popovers require tabbed navigation structures.
- The codebase maintains an internal design system under the shared UI namespace to standardize reusable presentation primitives across application views.
- The @opencode-ai/ui/tabs module is uniformly imported across multiple interface components to render multi-view controls and sortable terminal tabs.

## Problem Statement

User interface components across the application require a consistent approach to partitioned view navigation and tabbed panel switching. In the absence of a standardized module constraint, individual panels risk implementing disparate tab state primitives, diverging visual designs, and fragmented keyboard accessibility behaviors.

## Decision

1. SHOULD: Dialogs and popover bodies presenting multi-section configuration views SHOULD delegate section switching to the shared tab component to maintain cohesive styling and accessibility interactions.

## Policy Block

- SHOULD Dialogs and popover bodies presenting multi-section configuration views SHOULD delegate section switching to the shared tab component to maintain cohesive styling and accessibility interactions.

In scope:
- All user interface components, settings dialogs, terminal panels, and status popovers within the frontend application requiring tabbed or multi-panel view switching.

Out of scope:
- Non-visual services, backend orchestration logic, headless workers, and utility modules with no presentation layer concerns.

Exceptions:
- EXC-20-001: A specialized view requires non-standard tab accessibility tree semantics or low-level canvas embedding unsupported by the shared component.

## Rationale

- Evidence across settings dialogs, terminal panels, and popover views demonstrates consistent adoption of @opencode-ai/ui/tabs for tabbed interface structures.
- Consolidating tab navigation into a single shared internal module minimizes maintenance overhead and guarantees cohesive interaction semantics.
- Standardizing on @opencode-ai/ui/tabs allows complex capabilities such as sortable tab headers to integrate seamlessly with the shared presentation layer.

## Consequences

Positive:
- Enforces uniform keyboard navigation and accessibility attributes across all tabbed interface surfaces.
- Eliminates duplicated state management and styling logic across dialogs, panels, and popover bodies.
- Centralizes theme styling and design system updates within a single shared module.

Negative:
- Couples consuming user interface views to the shared module API and its release cycle.
- Requires upstream enhancement to the shared component whenever specialized layout or navigation behaviors are demanded.
- Adds a shared dependency coordination requirement across workspace packages.

## Alternatives

- Bespoke per-component tab state and styling implementation (rejected)
  Rejected because: Causes fragmentation of accessibility attributes, inconsistent keyboard navigation behaviors, and redundant styling across panels.
  When valid: Valid only in standalone prototypes or isolated modules completely separated from the shared design system.
- Direct adoption of unstyled third-party tab headless primitives in each feature module (rejected)
  Rejected because: Bypasses centralized theme styling and consistency guarantees established by the internal UI component library.
  When valid: Valid when designing the underlying foundation of the shared UI library package itself.

## Risks

- Breaking API changes in the shared tab component module could affect multiple panels simultaneously.
  Mitigation: Enforce lock-step semantic versioning, strict type contract testing, and comprehensive workspace integration suites.
  Owner: Frontend Engineering Team
- Complex interaction requirements like drag-and-drop reordering may require tight coupling between sortable wrappers and internal tab DOM elements.
  Mitigation: Expose composable slot, item, and trigger interfaces within the tab component to accommodate sortable behaviors cleanly.
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
- Compose tab navigation triggers and tab content panels using the semantic slot structure provided by the internal UI package.
- Ensure active tab state transitions preserve reactive cleanup and disconnect event handlers or terminal session handles when tabs switch.

## Continuation Context


Verify commands:
- Discover the project test runner from the workspace manifest and execute the test suite covering UI components.
- Discover the repository static analysis script and verify that tabbed views import exclusively from the shared UI module.
- Execute the project type-checking script to confirm full type compliance with the shared tab interface definitions.

Accept when:
- All tabbed UI panels and dialog views instantiate their navigation structure using the shared tab module.
- Static analysis and dependency verification scripts complete without import boundary violations or missing module references.
- All component test suites and type-checking scripts pass without errors or regressions.

## Enforcement

- Verified by: Automated continuous integration checks executing repository lint and module import boundary rules.
- Verified by: Architectural and peer code reviews during pull request review processes.
- Violation handling: Pull requests introducing ad-hoc tab implementations or unapproved external tab libraries are blocked until refactored to use the shared module.
- Exception process: Submit an architectural review request outlining why the shared tab module cannot meet functional or rendering constraints.
- Exception process: Obtain sign-off from the design system maintainers before introducing any temporary alternative.