# Adopt @opencode-ai/session-ui/v2/session-review-v2 for Session Review Interface Components: Session Review Components Not Introduce Hoc

Status: proposed
Date: 2025-05-15
Deciders: Detection Pipeline (automated)

## Context

- Session review workflows require structured UI components for browsing workspace diffs, reviewing file modifications, and coordinating review state.
- Centralizing review interface logic within the dedicated internal workspace module @opencode-ai/session-ui/v2/session-review-v2 isolates review domain presentation from top-level application orchestration.
- Multiple review views, file tabs, and state coordination modules in the session domain consume this internal package to maintain a unified presentation and state interface.

## Problem Statement

Implementing session review functionality directly in top-level application page components risks duplicating diff inspection logic, scattering review state mutations, and creating inconsistent user experiences across file browsing and review views. An architectural standard is required to mandate consumption of the designated internal review module for all session review UI surfaces.

## Decision

1. MUST_NOT: Session review components MUST NOT introduce ad-hoc diff review presentation widgets that bypass the shared internal review module.

## Policy Block

- MUST_NOT Session review components MUST NOT introduce ad-hoc diff review presentation widgets that bypass the shared internal review module.

In scope:
- Session review UI panels, diff inspection tabs, and review state management modules in the application layer.
- Components orchestrating file review navigation and review session status.

Out of scope:
- Non-review session views such as general terminal sessions, settings interfaces, or standalone prompt consoles.
- Underlying low-level data access transport clients that operate independently of UI presentation.

## Rationale

- Adopting @opencode-ai/session-ui/v2/session-review-v2 establishes a clear separation between application-level routing and modular session review user interface implementation.
- Consolidating review presentation components and state structures into an internal package prevents code duplication across review tabs and review panels.
- Evidence across session review pages and state modules confirms consistent consumption of @opencode-ai/session-ui/v2/session-review-v2 as the foundational UI contract.

## Consequences

Positive:
- Decouples session review visual rendering and interaction logic from page routing layers.
- Ensures consistent diff viewing, file inspection, and review state behavior across all session review surfaces.
- Enables independent evolution, testing, and maintenance of review UI components within their dedicated workspace package.

Negative:
- Creates an architectural dependency on the internal workspace package for all review-related enhancements.
- Requires developers to coordinate changes across workspace package boundaries when extending review features.

## Alternatives

- Inline review UI component implementation directly within application page views (rejected)
  Rejected because: Increases duplication of diff display logic and fragments review state management across disparate page components.
  When valid: Valid only in throwaway prototypes or single-view applications without shared review panels.
- Generic third-party code review widget integration without an internal abstraction layer (rejected)
  Rejected because: Fails to provide domain-specific review bindings and tight integration with workspace session state.
  When valid: Valid when standard off-the-shelf diff viewers require zero workspace customization.

## Risks

- Tight coupling between application review pages and internal workspace review package contracts could cause breaking changes during updates.
  Mitigation: Enforce semantic versioning and integration contract tests between the review package and consuming application pages.
  Owner: Frontend Platform Team
- Developers may inadvertently recreate diff rendering logic locally instead of utilizing the internal module.
  Mitigation: Enforce automated static analysis and code review checks to detect unauthorized local review widgets.
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
- When creating new session review panels or diff views, import all UI components, icons, and state types directly from @opencode-ai/session-ui/v2/session-review-v2.
- Maintain review state in dedicated review state modules to cleanly decouple user interaction handling from view rendering.

## Continuation Context


Verify commands:
- Discover the repository dependency verification command from the project manifest and execute it to confirm package integrity.
- Discover and execute the project static analysis and linting command to detect any unapproved imports in session review modules.
- Discover and run the project test suite covering session review components to validate contract adherence.

Accept when:
- All session review components and state modules successfully import from @opencode-ai/session-ui/v2/session-review-v2 with zero type or lint errors.
- No custom or duplicate review diff widgets exist outside the approved workspace package boundary.
- All automated verification tests pass without regression.

## Enforcement

- Verified by: Automated static analysis checks verifying import paths in session UI modules during pull request validation.
- Verified by: Peer code review for all new review components and state changes.
- Violation handling: Pull request builds will fail if review UI components are implemented outside the designated internal module.
- Violation handling: Code review rejection requiring refactoring into @opencode-ai/session-ui/v2/session-review-v2.
- Exception process: Exceptions require architectural review submission justifying why the shared package cannot accommodate the requirement, approved by the lead frontend architect.