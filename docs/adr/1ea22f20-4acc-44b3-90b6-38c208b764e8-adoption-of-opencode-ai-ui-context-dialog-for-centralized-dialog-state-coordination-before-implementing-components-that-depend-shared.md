# Adoption of @opencode-ai/ui/context/dialog for Centralized Dialog State Coordination: Before Implementing Components That Depend Shared

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- User interface interactions across application views and modal components require standardized lifecycle coordination for displaying and dismissing dialogs.
- Ten distinct component modules across dialog triggers, selection workflows, and command palettes consistently import the shared @opencode-ai/ui/context/dialog module.
- Decentralizing modal state management into individual parent components risks fragmented overlay hierarchies and inconsistent modal dispatch behavior.

## Problem Statement

Without a unified dialog context module, modal overlays and interactive dialogs across disparate views become difficult to orchestrate predictably, leading to duplicated visibility state, conflicting focus traps, and fragmented overlay lifecycles.

## Decision

1. MUST: Before implementing components that depend on shared workspace UI packages, engineers MUST discover the workspace resolution artifact and verify the exact resolved version and API surface of @opencode-ai/ui/context/dialog.

## Policy Block

- MUST Before implementing components that depend on shared workspace UI packages, engineers MUST discover the workspace resolution artifact and verify the exact resolved version and API surface of @opencode-ai/ui/context/dialog.

In scope:
- User interface components and views that present, trigger, or coordinate dialog overlays.
- Storybook documentation and isolated component fixture definitions that render dialog interactions.

Out of scope:
- Non-visual backend communication services and headless utility modules.
- Inline presentation components that do not render or control overlay layers.

Exceptions:
- EXC-20-001: Native operating system dialogs are invoked through platform integration bridges instead of in-DOM overlay rendering.

## Rationale

- Consolidating overlay management into @opencode-ai/ui/context/dialog provides a consistent interface for opening, closing, and tracking active dialogs across disparate visual modules.
- Shared contextual state prevents conflicting modal states and eliminates prop-drilling of visibility flags across deep component hierarchies.
- Static analysis confirms systematic adoption across ten UI modules, evidencing an established architectural standard within the client codebase.

## Consequences

Positive:
- Unifies dialog lifecycle orchestration and overlay state access across all client view layers.
- Prevents state synchronization drift and duplicate dialog instances across decoupled components.
- Simplifies component composition by providing standard contextual hooks for modal control.

Negative:
- Creates an architectural dependency on the internal UI context package across all overlay-triggering components.
- Requires components to reside within the appropriate context provider hierarchy during unit testing and story rendering.

## Alternatives

- Prop-drilling modal visibility state and callback functions down component trees (rejected)
  Rejected because: Creates high coupling between intermediate layout components and deeply nested dialog triggers, hindering component reuse and maintainability.
  When valid: Single-use components where dialog triggers and modal bodies share an immediate parent-child boundary.
- Direct instantiation of isolated dialog instances without shared context (rejected)
  Rejected because: Lacks central coordination for modal stacking order, mutual exclusion, and keyboard focus handling across multiple simultaneous overlays.
  When valid: Standalone alerts with strictly isolated presentation lifecycles.

## Risks

- Components consuming dialog context outside a registered provider tree will fail at runtime.
  Mitigation: Ensure top-level application root and component test harnesses wrap rendered trees with the mandatory dialog context provider.
  Owner: Engineering Team
- Breaking API changes in the shared context module could simultaneously impact multiple dependent dialog views.
  Mitigation: Maintain semantic stability in the shared UI package and enforce automated interface compatibility checks.
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
- Wrap client root components with the dialog context provider to establish the shared overlay lifecycle context before rendering consumer views.
- When testing dialog-dependent components in isolation, configure test harnesses with mock context implementations matching the public interface of @opencode-ai/ui/context/dialog.

## Continuation Context


Verify commands:
- Discover the workspace static analysis script from repository configuration and execute it to verify that dialog imports originate from @opencode-ai/ui/context/dialog.
- Locate the repository test runner script through project manifests and run component test suites to validate dialog context consumption.

Accept when:
- All components presenting or triggering modal overlays resolve their dialog context from @opencode-ai/ui/context/dialog.
- Workspace static analysis and test validation suites pass without missing context errors.

## Enforcement

- Verified by: Automated static analysis checks enforcing allowed import boundaries across client packages.
- Verified by: Pull request code reviews verifying adherence to centralized dialog context usage.
- Violation handling: Automated continuous integration checks fail when direct or uncoordinated modal visibility state is detected.
- Violation handling: Pull requests containing disallowed overlay state patterns are blocked until refactored to consume the dialog context module.
- Exception process: Submit an architectural review request outlining technical constraints that prevent using @opencode-ai/ui/context/dialog.
- Exception process: Obtain sign-off from the technical lead and record the exception rationale in component documentation.