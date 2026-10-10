# Adoption of @dnd-kit/solid for Sortable Drag-and-Drop User Interface Interactions: Reorderable Tab Panel Components Isolate Sortable

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple user interface views require reorderable item collections such as draggable tab strips, side panels, and project listings.
- Reactive component architectures require drag-and-drop coordination that does not conflict with fine-grained DOM reconciliation or declarative state updates.
- Static analysis detects repeated adoption of @dnd-kit/solid and its sortable primitives across core application views.

## Problem Statement

Interactive components such as tab strips and project listings require sortable drag-and-drop capabilities, but ad-hoc imperative drag handling causes accessibility issues, UI state desynchronization, and divergent interaction behaviors across views.

## Decision

1. SHOULD: Reorderable tab and panel components SHOULD isolate sortable item hooks and drag handles within dedicated item components rather than coupling item-level drag state directly to parent container logic.

## Policy Block

- SHOULD Reorderable tab and panel components SHOULD isolate sortable item hooks and drag handles within dedicated item components rather than coupling item-level drag state directly to parent container logic.

In scope:
- Interactive user interface components requiring drag-and-drop reordering or sortable list management.
- Tab strips, side panel item arrangements, and project collection views.

Out of scope:
- Static presentation components without user-driven reordering capabilities.
- Non-interactive list views or pure read-only tabular data presentations.

Exceptions:
- EXC-20-001: Native operating system file drag-and-drop transfer is required rather than internal component reordering.

## Rationale

- @dnd-kit/solid provides reactive, accessible, and headless drag-and-drop abstractions that integrate cleanly with reactive component rendering cycles.
- Standardizing on a unified drag-and-drop solution across tab strips, navigation side panels, and project listings prevents fragmented interaction behaviors and redundant bundle bloat.
- The modular design of @dnd-kit/solid isolates sortable list mechanics from core drag sensors, allowing flexible layout customization across distinct UI surfaces.

## Consequences

Positive:
- Consistent drag-and-drop interactions, accessibility behaviors, and keyboard navigation across all sortable interface components.
- Decoupled interaction coordination that leaves DOM styling and component presentation entirely under local component control.
- Reduced architectural fragmentation by eliminating disparate drag-and-drop approaches across user interface modules.

Negative:
- Additional bundle size and runtime dependency overhead compared to unstyled native HTML drag events.
- Coordination overhead between transient drag sensor state and persistent reactive state stores.

## Alternatives

- Native HTML5 Drag and Drop API (rejected)
  Rejected because: Native HTML5 Drag and Drop features inconsistent styling capabilities across platforms, limited touch support, and complex integration with reactive rendering lifecycles.
  When valid: When handling external file drops directly from the host operating system filesystem.
- Custom Pointer Event Drag Handlers (rejected)
  Rejected because: Custom pointer event management requires significant boilerplate for collision detection, accessibility, keyboard navigation, and sensor management.
  When valid: When building lightweight, highly bespoke gesture interfaces with trivial single-axis dragging needs.

## Risks

- Mismatches between rapid drag sensor updates and reactive store state reconciliation could cause visual stutter or dropped updates.
  Mitigation: Buffer intermediate drag positions within local sensor state and commit final order mutations to stores only upon drop completion.
  Owner: Engineering Team
- Breaking changes or version drift across decoupled submodules of the drag-and-drop toolkit.
  Mitigation: Strictly enforce lock-file version grounding and verify compatibility across all drag-and-drop packages prior to updates.
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
- Wrap sortable items in designated sortable context providers and attach drag event handlers at container boundaries to isolate reordering logic.
- Ensure unique, stable identifier keys are supplied to sortable item hooks to prevent reactive reconciliation artifacts during reordering.

## Continuation Context


Verify commands:
- Discover and run the project dependency validation scripts to confirm all drag-and-drop submodules resolve to compatible versions from the authoritative lock artifact.
- Discover and execute the repository static analysis and linting suites to ensure no prohibited drag libraries or imperative DOM drag listeners are present.
- Discover and execute component test suites to verify sortable item reordering and reactive state synchronization behaviors.

Accept when:
- Static checks pass with no unauthorized drag-and-drop dependencies or unmanaged imperative drag listeners detected.
- All components implementing sortable list or tab interactions use @dnd-kit/solid primitives and pass interaction test suites.
- Dependency inspection confirms installed package resolutions strictly align with repository lock artifacts.

## Enforcement

- Verified by: Automated continuous integration checks validating static code analysis and dependency compliance.
- Verified by: Peer code review for changes introducing or modifying interactive drag-and-drop components.
- Violation handling: Continuous integration failures on unauthorized drag-and-drop dependencies or direct DOM manipulation.
- Violation handling: Pull request blocking until code is refactored to use standard @dnd-kit/solid primitives.
- Exception process: Submit an architectural review request detailing technical limitations that necessitate custom drag mechanics.
- Exception process: Approval required from the Architecture Review Team with accompanying documentation.