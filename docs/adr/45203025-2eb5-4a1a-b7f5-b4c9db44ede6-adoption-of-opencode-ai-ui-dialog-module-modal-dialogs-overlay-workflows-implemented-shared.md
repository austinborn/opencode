# Adoption of @opencode-ai/ui/dialog Module: Modal Dialogs Overlay Workflows Implemented Shared

Status: proposed
Date: 2025-05-15
Deciders: Detection Pipeline (automated)

## Context

- The application requires modal dialogs for settings, model management, provider configuration, directory selection, and usage warnings.
- Independent modal implementations across dialog components introduce visual inconsistency, fragmented accessibility behaviors, and redundant focus trapping logic.
- Static analysis across application dialog components reveals consistent consumption of the @opencode-ai/ui/dialog workspace package and its companion context module.

## Problem Statement

Application components requiring user prompts, model selection, configuration, and workflows must present consistent modal interfaces. Unstandardized modal implementations risk breaking accessibility compliance, keyboard trapping, backdrop dismissal behaviors, and uniform visual presentation across application features.

## Decision

1. MUST: All modal dialogs and overlay workflows MUST be implemented using the shared @opencode-ai/ui/dialog module rather than ad-hoc window containers or native window primitives.

## Policy Block

- MUST All modal dialogs and overlay workflows MUST be implemented using the shared @opencode-ai/ui/dialog module rather than ad-hoc window containers or native window primitives.

In scope:
- All application components presenting modal surfaces, configuration prompts, selection overlays, and user interaction dialogs.
- Shared UI component libraries providing modal presentation primitives.

Out of scope:
- Non-modal inline interface elements, tooltips, and non-blocking notification banners that do not trap focus or present modal overlays.
- Headless background processing services and data synchronization workers operating outside the user interface layer.

## Rationale

- Standardizing on @opencode-ai/ui/dialog across all modal dialog components ensures uniform focus trapping, backdrop containment, keyboard navigation, and accessibility semantics.
- Leveraging a shared workspace UI module reduces maintenance overhead by centralizing modal lifecycle behavior and styling in a single component package.
- Empirical static analysis confirms widespread adoption of @opencode-ai/ui/dialog across dialog components, indicating an existing de facto standard that requires formal architectural governance.

## Consequences

Positive:
- Consistent modal behaviors, animations, and accessible keyboard navigation across all user-facing dialogs.
- Reduced duplication of overlay, portal, and focus-management logic across application views.
- Streamlined maintenance and design updates through centralized UI dialog primitives.

Negative:
- Couples application dialog views to the API contract and release lifecycle of the shared UI workspace package.
- Specialized dialog interactions requiring unique overlay behaviors must be accommodated within or abstracted through the shared dialog interface.

## Alternatives

- Custom Dialog Implementations per Feature (rejected)
  Rejected because: Creating custom overlay wrappers for each dialog component leads to duplicated focus-trap logic, inconsistent backdrop handling, and fragmented accessibility behaviors across the application.
  When valid: Valid only in standalone prototypes without shared design system infrastructure.
- Direct Consumption of Unwrapped Third-Party Modal Primitives (rejected)
  Rejected because: Consuming raw third-party modal libraries directly in feature components bypasses workspace design tokens, shared theming, and consistent dialog context contracts.
  When valid: Valid when building isolated experimental views decoupled from application theming.

## Risks

- Breaking changes in the @opencode-ai/ui/dialog API can simultaneously impact all modal dialog components across the application.
  Mitigation: Enforce workspace test suites and interface contract validations across consuming components before publishing changes.
  Owner: Engineering Team
- Complex nested dialogs or multi-step modal workflows may encounter state synchronization friction with standard dialog context.
  Mitigation: Provide documented state composition guidelines and extend @opencode-ai/ui/context/dialog to support coordinated hierarchical modal flows.
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
- Modal dialog components should encapsulate dialog visibility triggers and body layout while delegating overlay rendering and context propagation to @opencode-ai/ui/dialog and @opencode-ai/ui/context/dialog.
- Ensure all dialog instances manage focus restoration gracefully upon close, returning active focus to the triggering element.

## Continuation Context


Verify commands:
- Discover and run the project static analysis and linting scripts to verify that all modal dialog components import dialog primitives exclusively from the shared UI module.
- Discover and execute the project test suite to validate modal interaction behavior, rendering, and accessibility compliance.

Accept when:
- Static analysis confirms zero unapproved or custom modal dialog implementations outside the shared UI dialog module.
- All automated component tests covering modal dialog interactions execute and pass without regressions.

## Enforcement

- Verified by: Automated static analysis checks in continuous integration pipelines.
- Verified by: Peer review of user interface pull requests targeting modal components.
- Violation handling: Pull requests introducing non-standard modal containers or bypassing the shared dialog module are blocked until migrated.
- Exception process: Architectural review and documentation of specialized modal requirements that cannot be satisfied by the shared dialog primitives.