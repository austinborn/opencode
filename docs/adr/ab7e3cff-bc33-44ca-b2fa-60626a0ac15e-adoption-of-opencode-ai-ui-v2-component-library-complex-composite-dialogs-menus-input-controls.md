# Adoption of @opencode-ai/ui/v2 Component Library: Complex Composite Dialogs Menus Input Controls

Status: proposed
Date: 2025-05-18
Deciders: Detection Pipeline (automated)

## Context

- Application user interface views across the workspace require consistent visual presentation, accessibility behaviors, and shared interaction primitives.
- Direct dependency on disparate or legacy UI utilities causes divergence in interactive behaviors, inconsistent accessibility implementations, and visual drift.
- The codebase exhibits widespread adoption of the @opencode-ai/ui/v2 module family across core user interface components, establishing a centralized design system standard.
- A coexistence phase between legacy UI imports and updated module primitives necessitates explicit architectural governance to ensure progressive convergence.

## Problem Statement

User interface components across the application workspace require standardized, accessible, and theme-consistent primitives for presentation and interaction. Without an explicit architectural standard mandating the canonical component library, application views risk fragmenting across legacy implementations and ad-hoc visual components, leading to accessibility defects, maintenance overhead, and degraded user experience consistency.

## Decision

1. MUST: Complex composite dialogs, menus, and input controls MUST consume accessibility-wrapped primitives exported by the @opencode-ai/ui/v2 package.

## Policy Block

- MUST Complex composite dialogs, menus, and input controls MUST consume accessibility-wrapped primitives exported by the @opencode-ai/ui/v2 package.

In scope:
- All user interface components, views, dialogs, and presentation controls within the application codebase.
- All interactive UI primitives including icons, buttons, menus, dialogs, badges, and tooltips.

Out of scope:
- Backend services, command-line interface utilities, and headless background workers lacking visual presentation layers.
- Raw styling utilities and build-time asset generators that do not render interactive component trees.

Exceptions:
- EXC-20-001: A specialized UI interaction is required that is not yet supported by the component library primitives

## Rationale

- Centralizing on @opencode-ai/ui/v2 provides accessible, pre-tested foundational primitives across dialogs, menus, buttons, and iconography.
- Evidence across thirteen core application components demonstrates active convergence toward the @opencode-ai/ui/v2 module hierarchy, establishing it as the proven standard.
- Restricting ad-hoc UI primitive creation prevents duplication of complex accessibility logic and visual styling across separate component trees.
- Modular subpath imports facilitate tree-shaking and maintain explicit dependency boundaries across application packages.

## Consequences

Positive:
- Unified interactive behaviors and consistent design system visual alignment across all application screens.
- Reduced duplication of accessibility scaffolding for interactive dialogs, menus, and tooltips.
- Streamlined maintenance and global updates through centralized component library improvements.
- Explicit modular dependency contracts across frontend presentation components.

Negative:
- Migration overhead to refactor residual legacy UI references across existing views.
- Coupling of frontend component updates to the release cadence of the shared design system library.
- Added coordination requirement when application views need interaction primitives not yet published by the library.

## Alternatives

- Maintain ad-hoc localized UI primitives within each component folder (rejected)
  Rejected because: Increases code duplication, risks inconsistent user experiences, and fragments accessibility compliance across views.
  When valid: Valid only for ephemeral one-off proof-of-concept prototypes prior to production integration.
- Adopt an external unstyled headless component primitive framework directly in application views (rejected)
  Rejected because: Bypasses workspace design tokens and requires duplicating styling infrastructure across every application surface.
  When valid: Valid when building an independent frontend shell with distinct styling guidelines.

## Risks

- Breaking changes in upstream component library releases may impact dependent application components simultaneously.
  Mitigation: Enforce strict dependency resolution verification, run automated component regression tests, and leverage lock artifact pinning.
  Owner: Frontend Engineering Team
- Partial refactoring leaving legacy UI modules and updated primitives coexisting indefinitely.
  Mitigation: Track legacy import counts via automated static analysis and schedule incremental remediation tickets during normal feature development.
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
- Inspect the workspace dependency manifest to discover available module paths and export contracts provided by @opencode-ai/ui/v2 before importing new components.
- When refactoring components, systematically replace legacy UI imports with their corresponding primitives to reduce bundle overhead.

## Continuation Context


Verify commands:
- Discover the workspace dependency manifest and execute the designated static analysis script to verify module import constraints.
- Discover the repository test runner script and execute component unit and integration test suites to validate UI primitive integration.
- Execute the repository build verification command to ensure all component module exports resolve without type or compilation errors.

Accept when:
- All newly authored user interface components import interactive primitives strictly from the @opencode-ai/ui/v2 package.
- The static import verification script passes across the component directory without detecting disallowed ad-hoc primitive implementations.
- Component test suites and compilation checks execute cleanly with zero module resolution errors.

## Enforcement

- Verified by: Automated static analysis and linting checks running in continuous integration pipelines.
- Verified by: Peer code review verification enforcing import rules on all pull requests altering UI components.
- Violation handling: Pull requests introducing non-standard UI primitives or prohibited legacy imports will fail continuous integration gates and be blocked from merging.
- Exception process: Teams requiring custom primitives must open an architecture exception request with the design system maintainers documenting the missing capability and planned upstream contribution.