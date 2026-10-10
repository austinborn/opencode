# Adoption of Internal Layout Context Module for Application Layout Coordination: Page Controllers Layout Components Not Implement

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- The application client consists of multiple decoupled views including home navigation, session layouts, and tab avatar components that require synchronized awareness of active directories, worktrees, and routes.
- Static analysis across the presentation layer demonstrates consistent consumption of the internal layout context module for layout state, project listings, and route transitions across six distinct modules.
- Without a formalized architectural decision governing the layout context module, future controllers risk introducing redundant localized state or divergent routing mechanisms.

## Problem Statement

Managing workspace directories, active session routes, and project selection across multiple decoupled view controllers risks state divergence and excessive prop drilling if handled independently. An authoritative module is required to coordinate application-wide layout and workspace navigation state consistently across page boundaries.

## Decision

1. MUST_NOT: Page controllers and layout components MUST NOT implement independent duplicate tracking of active project worktrees or navigation routes outside the layout context module boundary.

## Policy Block

- MUST_NOT Page controllers and layout components MUST NOT implement independent duplicate tracking of active project worktrees or navigation routes outside the layout context module boundary.

In scope:
- Page-level controllers, layout shells, session navigation components, and workspace selection dialogs.
- Application views requiring synchronized layout, active directory, and session route tracking.

Out of scope:
- Isolated leaf presentation components with strictly localized presentation state.
- Pure utility modules that perform stateless data transformations without referencing application layout state.

Exceptions:
- EXC-20-001: A headless utility requires pure path calculations without needing reactive layout context bindings.

## Rationale

- Centralizing layout and workspace tracking within the internal layout context module ensures consistent synchronization of active directories, worktrees, and routes across both home and session views.
- Evidence across six distinct controllers, layout shells, and helper files confirms uniform dependency on this module to query projects and synchronize route transitions.
- Using a dedicated context module prevents divergent state implementations and eliminates redundant session directory tracking logic across independent page controllers.

## Consequences

Positive:
- Provides a single authoritative boundary for application-level layout, directory selection, and route synchronization.
- Eliminates state duplication across page controllers, home views, and session layouts.
- Simplifies presentation components by abstracting project lookup and route reconciliation behind clean context accessors.

Negative:
- Creates a centralized dependency that consuming controllers and views must coordinate through.
- Requires disciplined accessor isolation to prevent unnecessary re-evaluations across consumers when layout state updates.

## Alternatives

- Localized Component State and Prop Drilling (rejected)
  Rejected because: Passing layout, active directory, and route coordination state down deeply nested component hierarchies leads to excessive boilerplate, fragile prop interfaces, and synchronization drift.
  When valid: Small isolated components with localized presentation state that do not span across page layouts or controllers.
- Global Unscoped Singleton State Stores (rejected)
  Rejected because: Direct reliance on unmanaged global singletons bypasses lifecycle scoping, complicates teardown and multi-workspace isolation, and impairs testability.
  When valid: Read-only application configuration initialized once at startup.

## Risks

- Coupling between distinct view controllers and the shared layout context module could cause unnecessary re-renders if reactive signals are improperly scoped.
  Mitigation: Expose granular, memoized accessors within the layout context module so that consumers only re-evaluate on relevant state changes.
  Owner: Frontend Architecture Team
- Circular dependency risks if utility helpers or sub-controllers import the layout context while being imported by the context provider itself.
  Mitigation: Strictly enforce unidirectional dependency flow where context definitions reside in dedicated leaf modules decoupled from presentation helpers.
  Owner: Frontend Architecture Team

## Implementation Notes

- DISCOVERY POLICY (MANDATORY): This ADR omits all tool names, file names, commands, package managers, and version numbers. The consumer MUST derive them from the project repository.

LOCK-VERSION GROUNDING (MANDATORY) — before writing code that uses a versioned library, execute in order:
1. Find the dependency manifest in the repo. It declares ranges, not installed versions.
2. Identify the build tool from the manifest.
3. Inspect the repository lock or resolution artifact to determine the exact resolved version. This artifact is authoritative; build-tool output only verifies the active environment matches it.
4. Look up the official documentation, changelog, or public API reference for that exact version. Do not use training-data recall — fetch or search the public internet for version-specific docs.
5. Confirm every API, class, or function you will call exists in that exact version's documentation before using it.
6. For version-sensitive behavior, re-run steps 3-5 per dependency at point of use.
- Locate the layout context provider within the application module hierarchy to identify exposed reactive signals, queries, and mutation dispatchers.
- Ensure new view controllers subscribe to reactive signals exposed by the layout context rather than passing layout state through deeply nested component property trees.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting verification suite to check for prohibited direct state duplication across controller modules.
- Discover and execute the unit and integration test runners to validate state synchronization between the layout context module and consuming controllers.
- Discover and invoke the architectural dependency boundary checker to ensure all layout state access routes strictly through the designated context module.

Accept when:
- Static analysis confirms all page controllers and layout components import layout coordination state exclusively from the designated context module.
- Test suites pass with zero regressions in route synchronization and project worktree selection across home and session layouts.
- Architecture boundary verification validates no circular dependencies exist between the layout context module and consuming views.

## Enforcement

- Verified by: Automated dependency boundary and import linting in continuous integration pipelines.
- Verified by: Mandatory architectural code review for any new page controllers or layout-level modules.
- Verified by: Integration test suites validating layout state propagation across route transitions.
- Violation handling: Pull requests introducing direct layout state replication or bypassing the layout context module are blocked until refactored.
- Violation handling: Violations identified during code review require alignment with standard layout context access patterns prior to merge.
- Exception process: Developers must submit an architectural exception request detailing why the layout context module is unsuitable for the specific use case, subject to approval by the architecture review team.