# Adoption of @dnd-kit/solid for User Interface Drag and Drop: Sortable List Presentations Reorderable Collections Use

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Multiple user interface surfaces within the application require interactive reordering capabilities, including tab strips, side panels, terminal panels, and project item cards.
- Implementing custom pointer and drag tracking logic for each interactive surface introduces redundant code, inconsistent collision handling, and accessibility gaps.
- Evidence across four distinct visual panels and view components demonstrates repeated integration of @dnd-kit/solid and companion sortable packages with reactive state management.

## Problem Statement

User interface components across the application require flexible, accessible, and performant drag-and-drop capabilities for tab reordering, panel management, and list sorting. Without a unified interaction library, disparate components risk implementing divergent, fragile pointer-handling logic that complicates maintenance and conflicts with reactive state synchronization.

## Decision

1. MUST: Sortable list presentations and reorderable collections MUST use @dnd-kit/solid sortable primitives to manage spatial indexing and drag event lifecycles.

## Policy Block

- MUST Sortable list presentations and reorderable collections MUST use @dnd-kit/solid sortable primitives to manage spatial indexing and drag event lifecycles.

In scope:
- Interactive UI components requiring drag-and-drop, tab strip reordering, panel docking, or sortable collection behaviors.
- Components residing within the presentation application package managing reorderable visual elements.

Out of scope:
- Static presentation views without pointer-driven element relocation.
- Non-browser application modules, background workers, and headless data services.

Exceptions:
- EXC-20-001: A custom interaction requires specialized non-DOM hardware acceleration unsupported by the library primitives.

## Rationale

- Adopting @dnd-kit/solid provides specialized reactive primitives that integrate naturally with reactive state stores across the component tree.
- Consolidating drag-and-drop behavior around a single ecosystem reduces maintenance surface and prevents conflicting interaction patterns across distinct application panels.
- Evidence across multiple core navigation and panel files confirms that @dnd-kit/solid satisfies diverse interaction requirements spanning tab strips, side panels, and project views.

## Consequences

Positive:
- Consolidates drag, drop, and sortable interaction patterns across tabs, panels, and project views into a unified reactive interaction model.
- Provides accessibility, sensor management, and collision detection without requiring custom pointer tracking logic in component code.
- Eliminates divergent drag implementations across visual modules in the application layer.

Negative:
- Introduces an external runtime dependency coupling UI layout components to library-specific sensor and context primitives.
- Imposes learning overhead for contributors regarding library-specific collision detection algorithms and sortable strategies.

## Alternatives

- Native browser Drag and Drop API implementations (rejected)
  Rejected because: Native browser drag-and-drop APIs exhibit inconsistent cross-environment behavior, limited touch interaction support, and complex synchronization with fine-grained reactive state models.
  When valid: Simple file drop targets receiving external filesystem items from the operating system desktop environment.
- Ad-hoc pointer event listeners with manual translate transforms (rejected)
  Rejected because: Increases maintenance overhead, lacks built-in keyboard navigation accessibility, and risks state desynchronization between manual transforms and reactive stores.
  When valid: Single-axis layout resizing without sortable item swapping or collision management requirements.

## Risks

- Breaking API changes across library version updates affecting sortable hooks and sensor bindings.
  Mitigation: Enforce strict dependency lockfile grounding, pin exact versions, and maintain integration tests for all drag-and-drop components.
  Owner: Frontend engineering team
- Performance degradation during rapid pointer movement if collision detection recalculates unmemoized large lists.
  Mitigation: Apply collision detection algorithms suited to container item density and avoid reactive churn during drag over events.
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
- Configure sensors and collision detection strategies at the nearest common ancestor container component enclosing the draggable elements.
- Isolate sortable item identifiers using stable keys rather than volatile array indices to prevent state corruption during reordering animations.

## Continuation Context


Verify commands:
- Discover the workspace dependency manifest and inspect declared dependencies to confirm registration of the drag-and-drop library packages.
- Execute the repository test suite through the established task runner to ensure interactive drag-and-drop component suites pass.
- Run the project static analysis and type checking workflow to verify proper interface typing across all drag-and-drop integrations.

Accept when:
- All UI components featuring drag-and-drop or sortable interactions import and use the approved drag-and-drop library primitives.
- Static analysis and type verification complete with zero diagnostics across all interactive layout modules.
- Automated unit and integration test suites validate that drag-and-drop reorder operations update reactive state correctly.

## Enforcement

- Verified by: Static analysis and import lint rules executed during continuous integration workflows.
- Verified by: Peer code review for pull requests modifying or adding interactive drag-and-drop interfaces.
- Violation handling: Continuous integration checks fail when unapproved drag-and-drop libraries or raw pointer manipulation workarounds are introduced.
- Violation handling: Code review blocks merging until non-compliant implementations are refactored to use standard library primitives.
- Exception process: Submit an architectural review request explaining why the standard library primitives cannot satisfy the interaction requirements.
- Exception process: Obtain formal approval from frontend architecture leads prior to introducing any alternative interaction mechanism.